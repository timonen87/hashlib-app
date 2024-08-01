import { getAppSessionStrictServer } from "@/entities/user/session.server";
import { FollowerInfo } from "@/features/follower/models/types";
import { dbClient } from "@/shared/lib/db";


export async function GET(
  req: Request,
  { params: { userId } }: { params: { userId: string } },
) {
  try {
    const session = await getAppSessionStrictServer()

    if (!session.user) {
      return Response.json({ error: "Unauthorized" }, { status: 401 });
    }

    const user = await dbClient.user.findUnique({
      where: { id: userId },
      select: {
        followers: {
          where: {
            followerId: session.user.id,
          },
          select: {
            followerId: true,
          },
        },
        _count: {
          select: {
            followers: true,
          },
        },
      },
    });

    if (!user) {
      return Response.json({ error: "User not found" }, { status: 404 });
    }

    const data: FollowerInfo = {
      followers: user._count.followers,
      isFollowedByUser: !!user.followers.length,
    };

    console.log("followInfo", data)

    return Response.json(data);
  } catch (error) {
    console.error(error);
    return Response.json({ error: "Internal server error" }, { status: 500 });
  }
}

export async function POST(
  req: Request,
  { params: { userId } }: { params: { userId: string } },
) {
  try {
    const session = await getAppSessionStrictServer()

    if (!session.user) {
      return Response.json({ error: "Unauthorized" }, { status: 401 });
    }

    await dbClient.$transaction([
      dbClient.follow.upsert({
        where: {
          followerId_followingId: {
            followerId: session.user.id,
            followingId: userId,
          },
        },
        create: {
          followerId: session.user.id,
          followingId: userId,
        },
        update: {},
      }),
      // dbClient.notification.create({
      //   data: {
      //     issuerId: loggedInUser.id,
      //     recipientId: userId,
      //     type: "FOLLOW",
      //   },
      // }),
    ]);

    return new Response();
  } catch (error) {
    console.error(error);
    return Response.json({ error: "Internal server error" }, { status: 500 });
  }
}

export async function DELETE(
  req: Request,
  { params: { userId } }: { params: { userId: string } },
) {
  try {
    const session = await getAppSessionStrictServer()

    if (!session.user) {
      return Response.json({ error: "Unauthorized" }, { status: 401 });
    }

    await dbClient.$transaction([
      dbClient.follow.deleteMany({
        where: {
          followerId: session.user.id,
          followingId: userId,
        },
      }),
      // prisma.notification.deleteMany({
      //   where: {
      //     issuerId: loggedInUser.id,
      //     recipientId: userId,
      //     type: "FOLLOW",
      //   },
      // }),
    ]);

    return new Response();
  } catch (error) {
    console.error(error);
    return Response.json({ error: "Internal server error" }, { status: 500 });
  }
}

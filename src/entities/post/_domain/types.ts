import { Profile } from "@/entities/user/profile";
import { Post, Category, User } from "@prisma/client";



// type Category = {
//   id: string;
//   name: string;
//   image: string | null;
//   slug: string;
//   description: string | null;
//   hideBlock: boolean;
//   createdAt: Date;
//   updatedAt: Date;
//   creatorId: string | null;
// }

type PostListCategory = {
  id: string;
  name: string;
  image: string | null;
  slug: string;

}


export type PostListElement = {
    id: string;
    title: string;
    content: any;
    author: Profile
    category: PostListCategory;
    slug: string;
};

export type Profile = {
    email: string;
    name?: string | null;
    image?: string | null;
  } ;



export type CreatePostListElementCommand = {
    id: string;
    title: string;
    slug: string;
    content: any
    createdAt: Date;
    updatedAt: Date;
    authorId: string;
    categoryId: string;
    published: boolean;
  };

  type DeletePostListElementCommand = {
    id: string;
  };

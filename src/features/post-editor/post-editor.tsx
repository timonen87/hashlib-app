"use client";

import Placeholder from "@tiptap/extension-placeholder";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
// import { useDropzone } from "@uploadthing/react";
import { ImageIcon, Loader2, X } from "lucide-react";
import Image from "next/image";
import { ClipboardEvent, useRef } from "react";

import "./styles.css";

import { useAppSession } from "@/entities/user/session";
import { ProfileAuthor } from "@/entities/post/ui/profile-author";

import { useSubmitPostMutation } from "./queries";
import { cn } from "@/shared/ui/utils";
import LoadingButton from "@/shared/ui/loading-button";
import { Button } from "@/shared/ui/button";
import { Input } from "@/shared/ui/input";

export default function PostEditor() {
  const session = useAppSession();

  const user = session.data?.user
  return (
    <div className="flex flex-col gap-5 rounded-2xl bg-card p-5 shadow-sm mb-4">
      <div className="flex gap-5">
        <ProfileAuthor
          profile={user}
          className="hidden sm:inline"
        />
        <Input />
        <Button>Post</Button>
      </div>
    </div>
  );
}

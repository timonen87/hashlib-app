import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/shared/ui/dialog";
import { PostData } from "../_domain/types";
import { useDeletePostMutation } from "../_vm/use-delete-post";
import { Button } from "@/shared/ui/button";
import LoadingButton from "@/shared/ui/loading-button";


interface DeletePostDialogProps {
  post: PostData;
  open: boolean;
  onClose: () => void;
}

export default function DeletePostDialog({
  post,
  open,
  onClose,
}: DeletePostDialogProps) {
  const mutation = useDeletePostMutation();

  function handleOpenChange(open: boolean) {
    if (!open || !mutation.isPending) {
      onClose();
    }
  }

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Удалить пост?</DialogTitle>
          <DialogDescription>
          Вы уверены, что хотите удалить этот пост? Это действие невозможно
          отменить.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <LoadingButton
            variant="destructive"
            onClick={() => mutation.mutate(post.id, { onSuccess: onClose })}
            loading={mutation.isPending}
          >
            Удалить
          </LoadingButton>
          <Button
            variant="outline"
            onClick={onClose}
            disabled={mutation.isPending}
          >
            Закрыть
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

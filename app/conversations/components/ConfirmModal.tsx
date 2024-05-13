"use client";

import Button from "@/app/components/Button";
import Modal from "@/app/components/Modal";
import useConversation from "@/hooks/useConversation";
import { DialogTitle } from "@headlessui/react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useCallback, useState } from "react";
import toast from "react-hot-toast";
import { FiAlertTriangle } from "react-icons/fi";

interface ConfirmModalProps {
  isOpen?: boolean;
  onClose: () => void;
}
const ConfirmModal: React.FC<ConfirmModalProps> = ({ isOpen, onClose }) => {
  const router = useRouter();
  const { conversationId } = useConversation();
  const [isLoading, setIsLoading] = useState(false);
  const onDelete = useCallback(() => {
    setIsLoading(true);
    axios
      .delete(`/api/conversations/${conversationId}`)
      .then(() => {
        onClose();
        router.push("/conversations");
        router.refresh();
      })
      .catch(() => {
        toast.error("Something went wrong...");
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [conversationId, router, onClose]);
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="sm:flex sm:items-start">
        <div className="mx-auto flex h-10 w-10 sm:h-12 sm:w-12 flex-shrink-0 items-center rounded-full bg-red-100 sm:mx-0 justify-center mt-1 sm:mt-0">
          <FiAlertTriangle className="h-6 w-6 text-red-600" />
        </div>
        <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
          <DialogTitle
            as="h3"
            className="text-base font-semibold leading-6 text-rose-500"
          >
            Delete Conversation
          </DialogTitle>
          <div className="mt-2">
            <p className="text-sm text-gray-500">
              are you sure you want to delete this chat?
            </p>
          </div>
        </div>
      </div>
      <div className="mt-5 sm:mt-4 flex flex-row-reverse">
        <Button disabled={isLoading} danger onClick={onDelete}>
          Delete
        </Button>
        <Button disabled={isLoading} secondary onClick={onClose}>
          Cancle
        </Button>
      </div>
    </Modal>
  );
};

export default ConfirmModal;

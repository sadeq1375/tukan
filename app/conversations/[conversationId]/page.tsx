import getConversationById from "@/app/actions/getConversationById";

interface IParams {
  conversationId: string;
}
const ConversationId = async ({ params }: { params: IParams }) => {
  const conversation = await getConversationById(params.conversationId);
  return <div>ConversationId</div>;
};
export default ConversationId;

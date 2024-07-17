// 문서상세조회
export type ApprovalDetailProps = {
  userId: string; //  문서 작성한 유저 아이디
  title: string;
  classification: string;
  content: string;
  completeYn: string;
  approvalNumber: number;
  documentNumber: number;
  approvalUserId: string; // 승인 해야하는 유저 아이디
  approvalYn: string;
  comment: string;
  approvalOrder: string;
};

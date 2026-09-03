import Modal from "../common/Modal";
import BidForm from "./BidForm";

export default function BidModal({ isOpen, onClose, categoryName, minBid }) {
  function handleSubmit(values) {
    // Static UI only — no submission logic is implemented.
    onClose();
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose} title={`Bid on ${categoryName}`}>
      <p className="text-sm text-ink-500 mb-5">
        Current highest bid in {categoryName}:{" "}
        <span className="font-semibold text-ink-900">₹{minBid}</span>
      </p>
      <BidForm categoryName={categoryName} minBid={minBid} onSubmit={handleSubmit} />
    </Modal>
  );
}

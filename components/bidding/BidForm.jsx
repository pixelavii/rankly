import { useState } from "react";
import Input from "../common/Input";
import BidInput from "./BidInput";
import Button from "../common/Button";

export default function BidForm({
  categoryName = "Instagram",
  minBid = 0,
  onSubmit,
  submitLabel = "Place Bid",
}) {
  const [username, setUsername] = useState("");
  const [profileUrl, setProfileUrl] = useState("");
  const [bidAmount, setBidAmount] = useState("");

  const isValid =
    username.trim() !== "" &&
    profileUrl.trim() !== "" &&
    bidAmount !== "" &&
    Number(bidAmount) > minBid;

  function handleSubmit(e) {
    e.preventDefault();
    if (!isValid) return;
    // No API call: this is a static UI demonstration only.
    onSubmit?.({ username, profileUrl, bidAmount: Number(bidAmount) });
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4" noValidate>
      <Input
        id="username"
        label={`${categoryName} Username`}
        placeholder="@yourusername"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
      />
      <Input
        id="profile-url"
        label={`${categoryName} Profile URL`}
        type="url"
        placeholder="https://instagram.com/yourusername"
        value={profileUrl}
        onChange={(e) => setProfileUrl(e.target.value)}
        required
      />
      <BidInput value={bidAmount} onChange={setBidAmount} minBid={minBid} />

      <Button
        type="submit"
        variant="primary"
        size="lg"
        className="w-full"
        disabled={!isValid}
      >
        {submitLabel}
      </Button>
    </form>
  );
}

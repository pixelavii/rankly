import crypto from "crypto";

export default async function Verify (req, res) {
    try {
        const {
            razorpay_payment_id,
            razorpay_order_id,
            razorpay_signature,
            account,
            category,
        } = req.body;

        const generatedSignature = crypto
            .createHmac(
                "sha256",
                process.env.RAZORPAY_KEY_SECRET
            )
            .update(
                `${razorpay_order_id}|${razorpay_payment_id}`
            )
            .digest("hex");

        if (generatedSignature !== razorpay_signature) {
            return res.status(400).json({
                success: false,
                message: "Payment verification failed",
            });
        }

        // Payment is authentic
        // Save user information here

        const user = await User.create({
            username: account.username,
            url: account.url,
            category,

            razorpayPaymentId: razorpay_payment_id,
            razorpayOrderId: razorpay_order_id,

            paymentStatus: "paid",
        });

        return res.json({
            success: true,
            message: "Payment verified and user saved",
            userId: user._id,
        });

    } catch (error) {
        console.error(error);

        res.status(500).json({
            success: false,
            message: "Payment verification failed",
        });
    }
};
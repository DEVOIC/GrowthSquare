'use client'
import { useToast } from "@/hooks/use-toast"
import { useActionState, useEffect, useState } from "react"
import { useParams } from "next/navigation"
import { resetPassword } from "./action"
import Form from "next/form"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Eye, EyeOff } from "lucide-react"

export default function ResetPasswordPage() {
    const { resetToken } = useParams()
    const { toast } = useToast()

    const [newPassword, setNewPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [showPassword, setShowPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)
    const [passwordError, setPasswordError] = useState("")

    const [state, action, pending] = useActionState(
        async () => {
            if (newPassword !== confirmPassword) {
                setPasswordError("Passwords do not match")
                return null
            }
            const formData = new FormData()
            formData.append("newPassword", newPassword)
            formData.append("resetToken", resetToken as string)
            return await resetPassword(formData)
        }, {}
    )

    useEffect(() => {
        if (!state) return;

        if (state.status === 200) {
            toast({ description: state.data.message })
            setNewPassword("")
            setConfirmPassword("")
            setPasswordError("")
        } else if (state.status === 400) {
            toast({ description: state.data.message })
            setNewPassword("")
            setConfirmPassword("")
            setPasswordError("")
        }
        else {
            setPasswordError('')
        }
    }, [state])
    return (
        <div className="relative min-h-screen flex items-center justify-center bg-lightblue/10 px-4">
            <div className="ellipse2 top-right -z-10 overflow-hidden"></div>
            <div className="ellipse2 bottom-0 left-0 -translate-x-1/3 -translate-y-1/3 absolute -z-10" />

            <div className="w-full max-w-md rounded-2xl shadow-xl bg-white p-8 space-y-6 border border-gray-100 text-center">
                <div className="space-y-2">
                    <h1 className="text-2xl md:text-4xl font-bold font-transforma text-gray-900">
                        Reset Your Password
                    </h1>
                    <p className="text-sm text-muted-foreground px-4">
                        Enter your new password below.
                    </p>
                </div>

                <Form action={action} className="space-y-6">
                    {/* New Password */}
                    <div className="relative">
                        <Input
                            id="newPassword"
                            type={showPassword ? "text" : "password"}
                            name="newPassword"
                            placeholder="New password"
                            required
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)}
                        />
                        <button
                            type="button"
                            className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground"
                            onClick={() => setShowPassword(prev => !prev)}
                            tabIndex={-1}
                        >
                            {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                        </button>
                    </div>

                    {/* Confirm Password */}
                    <div className="relative ">
                        <Input
                            id="confirmPassword"
                            type={showConfirmPassword ? "text" : "password"}
                            name="confirmPassword"
                            placeholder="Confirm new password"
                            required
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            className={
                                confirmPassword
                                    ? newPassword === confirmPassword
                                        ? "border-green-500 focus-visible:ring-green-500"
                                        : "border-red-500 focus-visible:ring-red-500"
                                    : ""
                            }
                        />
                        <button
                            type="button"
                            className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground"
                            onClick={() => setShowConfirmPassword(prev => !prev)}
                            tabIndex={-1}
                        >
                            {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                        </button>
                    </div>
                    {/* Password match error */}
                    {passwordError && (
                        <p className="text-red-500 text-sm">{passwordError}</p>
                    )}

                    <div className="flex justify-between gap-4 pt-2">
                        <Link href="/login" className="w-1/2">
                            <Button
                                type="button"
                                variant="outline"
                                className="w-full text-darkblue"
                                disabled={pending || confirmPassword !== newPassword || newPassword === "" || confirmPassword === ""}
                            >
                                Back to Login
                            </Button>
                        </Link>

                        <Button
                            type="submit"
                            className="w-1/2 bg-lightblue hover:bg-blue-700"
                            disabled={pending}
                        >
                            {pending ? 'Resetting...' : 'Reset Password'}
                        </Button>
                    </div>
                </Form>
            </div>
        </div>
    )
}

import "../index.css"
import { CheckCircle2 } from "lucide-react"
import { Label } from "../components/ui/Label"
import Input from "../components/ui/Input"
import { Checkbox } from "../components/ui/checkBox"
import Button from "../components/ui/Button"

export default function AuthPage() {
    return (
        <div className="flex flex-col md:flex-row gap-8 p-8 max-w-4xl mx-auto">
            <div className="flex-1">
                <h2 className="text-2xl font-semibold mb-6">Login</h2>
                <div className="h-1 w-12 bg-yellow-400 mb-6"></div>
                <p className="mb-6 text-gray-600">Welcome back! Sign in to your account</p>
                <form className="space-y-4">
                    <div>
                        <Label htmlFor="username">Username or email address*</Label>
                        <Input id="username" className="mt-1" required />
                    </div>
                    <div>
                        <Label htmlFor="password">Password*</Label>
                        <Input id="password" type="password" className="mt-1" required />
                    </div>
                    <div className="flex items-center space-x-2">
                        <Checkbox id="remember" />
                        <label htmlFor="remember" className="text-sm text-gray-600">
                            Remember me
                        </label>
                    </div>
                    <Button className="w-full bg-yellow-400 hover:bg-yellow-500 text-black">Login</Button>
                </form>
                <a href="#" className="text-blue-600 hover:underline mt-4 inline-block">
                    Lost your password?
                </a>
            </div>
            <div className="flex-1">
                <h2 className="text-2xl font-semibold mb-6">Register</h2>
                <div className="h-1 w-12 bg-yellow-400 mb-6"></div>
                <p className="mb-6 text-gray-600">Create your very own account</p>
                <form className="space-y-4">
                    <div>
                        <Label htmlFor="email">Email address*</Label>
                        <Input id="email" type="email" className="mt-1" required />
                    </div>
                    <Button className="w-full bg-yellow-400 hover:bg-yellow-500 text-black">Register</Button>
                </form>
                <div className="mt-8">
                    <h3 className="text-lg font-semibold mb-4">Sign up today and you will be able to :</h3>
                    <ul className="space-y-2">
                        {["Speed your way through checkout", "Track your orders easily", "Keep a record of all your purchases"].map(
                            (benefit, index) => (
                                <li key={index} className="flex items-center space-x-2">
                                    <CheckCircle2 className="text-green-500 w-5 h-5" />
                                    <span>{benefit}</span>
                                </li>
                            )
                        )}
                    </ul>
                </div>
            </div>
        </div>
    )
}
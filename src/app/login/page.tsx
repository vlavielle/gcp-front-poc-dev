import LoginForm from "@/components/loginForm";
import CustomCard from "@/components/custom-card";

export default function LoginPage() {
    return (
    <section className="min-h-screen flex-center">
        <CustomCard title='Iniciar sesión'>
            <LoginForm/>
        </CustomCard>
    </section>
    )
}
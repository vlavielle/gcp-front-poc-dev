import LoginForm from "@/components/loginForm";
import CustomCard from "@/components/custom-card";

export default function HomePage() {

    return (
        <CustomCard title='Bienvenido a Vitalmex'>
            <LoginForm/>
        </CustomCard> 
    )
}
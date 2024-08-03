import Header from "@/components/auth/header";
import BackButton from "@/components/auth/back-button";
import { Card, CardFooter, CardHeader } from "@/components/ui/card";

export default function ErrorCard() {
  return (
    <Card className="w-[400px] shadow-lg">
      <CardHeader className="text-destructive">
        <Header label="Упс! Что-то пошло не так..." />
      </CardHeader>
      <CardFooter>
        <BackButton label="Вернуться назад" href="/auth/login" />
      </CardFooter>
    </Card>
  );
}

"use client";

import { RoleGate } from "@/components/auth/role-gate";
import FormSuccess from "@/components/form-success";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { UserRole } from "@prisma/client";

const AdminPage = async () => {
  const onAPIRouteClick = () => {
    fetch("/api/admin").then((response) => {
      if (response.ok) {
        console.log("API Route success");
      } else {
        console.error("API Route failed");
      }
    });
  };

  return (
    <Card className="w-[600px]">
      <CardHeader>
        <p className="text-2xl font-semibold text-center">Admin Page</p>
      </CardHeader>
      <CardContent>
        <RoleGate allowedRole={UserRole.ADMIN}>
          <FormSuccess message="Вы вошли как администратор!" />
        </RoleGate>
        <div className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-md mt-3">
          <p className="text-sm font-medium">Admin-only API Route</p>
          <Button onClick={onAPIRouteClick}>Click to test</Button>
        </div>
        <div className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-md mt-3">
          <p className="text-sm font-medium">Admin-only Server Action</p>
          <Button>Click to test</Button>
        </div>
      </CardContent>
    </Card>
  );
};
export default AdminPage;

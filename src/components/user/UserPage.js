import OrderHeader from "../order/OrderHeader";
import UserAddresses from "./UserAddresses";
import UserMyInfo from "./UserMyInfo";
import UserNav from "./UserNav";

export default function UserPage() {
  return (
    <>
      <OrderHeader />
      <UserNav />
      <UserMyInfo />
      <UserAddresses />
    </>
  );
}

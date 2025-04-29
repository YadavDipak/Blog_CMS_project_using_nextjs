import Sidebar from "@/components/adminComponents/Sidebar";

export default function adminLayout({ children }) {
  return (
    <>
      <div className="flex">
        <Sidebar />
      </div>
      {children}
    </>
  );
}

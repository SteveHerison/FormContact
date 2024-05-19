import IconSUcess from "../../assets/images/icon-success-check.svg";

const AlertSucess = ({ visible }) => {
  if (!visible) return null;

  return (
    <section className="text-white flex flex-col items-center h-20 w-full fixed top-0 left-0 z-50">
      <div className="bg-emerald-950 p-4 mt-5 rounded-xl space-y-4">
        <div className="flex gap-2">
          <img src={IconSUcess} alt="" />
          <h3>Menssage Sent!</h3>
        </div>
        <p>Thanks for completing the form. We’ll be in touch soon!</p>
      </div>
    </section>
  );
};

export default AlertSucess;

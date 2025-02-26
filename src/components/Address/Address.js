import { ADDRESS_POPUP_HEIGHT, ADDRESS_POPUP_WIDTH } from "constants/POPUP_SIZE";
import { ADDRESS_INPUT_NAME } from "constants/INPUT";
import InputInfo from "utils/commons/InputInfo";
import InputErrorMessage from "components/SignUp/InputErrorMessge";

function Address(props) {
  const { handleAddress, address, errors } = props;

  const handleClick = () => {
    window.daum.postcode.load(() => {
      const postcode = new window.daum.Postcode({
        oncomplete: data => {
          const toBuildingAddress = `${data.address} ${data.buildingName}`;
          handleAddress(toBuildingAddress);
        },
        onsearch: data => {
          console.log(data);
        },
        width: ADDRESS_POPUP_WIDTH,
        height: ADDRESS_POPUP_HEIGHT,
      });

      postcode.open({
        left: window.screen.width / 2 - ADDRESS_POPUP_WIDTH / 2,
        top: window.screen.height / 2 - ADDRESS_POPUP_HEIGHT / 2,
        popupName: "addressPopup",
      });
    });
  };

  return (
    <div className="address-input-wrapper">
      <button type="button" className="address-show" onClick={handleClick}>
        {address || "주소 입력"}
      </button>
      <InputErrorMessage errors={errors} name={ADDRESS_INPUT_NAME} />
    </div>
  );
}

export default Address;

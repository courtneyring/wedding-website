import OpsWrapper from "@/components/OpsWrapper/OpsWrapper";
import ScheduleBlock from "@/components/ScheduleBlock/ScheduleBlock";
import schedule from '@/json/schedule.json';
import {
  PromoGroup,
  Container,
  Button,
} from "@courtneyring/components-library";

const Master = () => {


  return (
    <OpsWrapper
      backButton={{ label: "Main Menu", value: "/ops" }}
      header="Master Schedule"
    >
        <ScheduleBlock schedule={schedule}/>
    </OpsWrapper>
  );
};

export default Master;

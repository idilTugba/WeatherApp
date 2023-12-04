import {
  CheckCircleIcon,
  ExclamationCircleIcon,
} from "@heroicons/react/20/solid";
import { Callout } from "@tremor/react";

interface Props {
  message: string;
  warning?: boolean;
}

const CallOutCard = ({ message, warning }: Props) => {
  return (
    <Callout
      className="mt-2 text-sm"
      title={message}
      icon={warning ? ExclamationCircleIcon : CheckCircleIcon}
      color={warning ? "rose" : "teal"}
    />
  );
};

export default CallOutCard;

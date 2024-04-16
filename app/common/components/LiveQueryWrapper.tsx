// ./components/LiveQueryWrapper.tsx

import { Slot } from "@radix-ui/react-slot";
import { QueryParams } from "@sanity/client";
import { QueryResponseInitial } from "@sanity/react-loader";
import { PropsWithChildren } from "react";

import { LiveQueryData } from "./LiveQueryData";

type PreviewWrapperProps<T> = PropsWithChildren<{
  initial: QueryResponseInitial<T>;
  isEnabled?: boolean;
  query?: string;
  params?: QueryParams;
}>;

export function LiveQueryWrapper<T>(props: PreviewWrapperProps<T>) {
  const { isEnabled = false, query = null, params = {}, ...rest } = props;

  if (!isEnabled || !query) {
    const nonPreviewProps = { ...rest, data: props.initial.data };

    return <Slot {...nonPreviewProps} />;
  }

  return (
    <LiveQueryData<typeof props.initial.data>
      initial={props.initial}
      query={query}
      params={params}
    >
      {props.children}
    </LiveQueryData>
  );
}

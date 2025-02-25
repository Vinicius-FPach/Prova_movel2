import React from "react";
import { Stack } from "expo-router";
import MenuButton from "../shared/MenuButton";

type Link = {
  name: string
  path: string 
}

type HeaderWithTitleProps = {
  title: string
  links?: Link[]
};

export default function HeaderWithTitle({ title, links }: HeaderWithTitleProps) {
  return (
    <Stack.Screen
      options={{
        title,
        headerTitleStyle: {
            fontSize: 24,
        },
        headerRight: () => <MenuButton links={links} />,
      }}
    />
  );
}

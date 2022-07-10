// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: aFz13zrZNw9JGADAhhatpj
// Component: kM7BCkaFGX9eEG
import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";

import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/host";

import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import Avatar from "../../Avatar"; // plasmic-import: FzylRzkfDw3kPz/component
import Button from "../../Button"; // plasmic-import: G08annlMfaLvq3/component

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_twitter.module.css"; // plasmic-import: aFz13zrZNw9JGADAhhatpj/projectcss
import sty from "./PlasmicSuggestion.module.css"; // plasmic-import: kM7BCkaFGX9eEG/css

export type PlasmicSuggestion__VariantMembers = {};

export type PlasmicSuggestion__VariantsArgs = {};
type VariantPropType = keyof PlasmicSuggestion__VariantsArgs;
export const PlasmicSuggestion__VariantProps = new Array<VariantPropType>();

export type PlasmicSuggestion__ArgsType = {
  children?: React.ReactNode;
  slot?: React.ReactNode;
  slot2?: React.ReactNode;
};

type ArgPropType = keyof PlasmicSuggestion__ArgsType;
export const PlasmicSuggestion__ArgProps = new Array<ArgPropType>(
  "children",
  "slot",
  "slot2"
);

export type PlasmicSuggestion__OverridesType = {
  root?: p.Flex<"div">;
  avatar?: p.Flex<typeof Avatar>;
  button?: p.Flex<typeof Button>;
};

export interface DefaultSuggestionProps {
  children?: React.ReactNode;
  slot?: React.ReactNode;
  slot2?: React.ReactNode;
  className?: string;
}

function PlasmicSuggestion__RenderFunc(props: {
  variants: PlasmicSuggestion__VariantsArgs;
  args: PlasmicSuggestion__ArgsType;
  overrides: PlasmicSuggestion__OverridesType;

  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const $ctx = ph.useDataEnv?.() || {};
  const args = Object.assign(
    {},

    props.args
  );
  const $props = args;

  return (
    <p.Stack
      as={"div"}
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        sty.root
      )}
    >
      <Avatar
        data-plasmic-name={"avatar"}
        data-plasmic-override={overrides.avatar}
        className={classNames("__wab_instance", sty.avatar)}
      >
        {p.renderPlasmicSlot({
          defaultContents: (
            <p.PlasmicImg
              alt={""}
              className={classNames(sty.img__nlB9O)}
              displayHeight={"49px" as const}
              displayMaxHeight={"none" as const}
              displayMaxWidth={"none" as const}
              displayMinHeight={"0" as const}
              displayMinWidth={"0" as const}
              displayWidth={"49px" as const}
              src={{
                src: "/plasmic/twitter/images/image2.png",
                fullWidth: 225,
                fullHeight: 223,
                aspectRatio: undefined
              }}
            />
          ),

          value: args.children
        })}
      </Avatar>

      <div className={classNames(projectcss.all, sty.freeBox___9Alzw)}>
        <div className={classNames(projectcss.all, sty.freeBox___2GidI)}>
          <div className={classNames(projectcss.all, sty.freeBox__xcXq8)}>
            {p.renderPlasmicSlot({
              defaultContents: "Matt Wright",
              value: args.slot,
              className: classNames(sty.slotTargetSlot)
            })}
          </div>
        </div>

        <div className={classNames(projectcss.all, sty.freeBox___6O62I)}>
          {p.renderPlasmicSlot({
            defaultContents: "@mattwright",
            value: args.slot2,
            className: classNames(sty.slotTargetSlot2)
          })}
        </div>
      </div>

      <Button
        data-plasmic-name={"button"}
        data-plasmic-override={overrides.button}
        className={classNames("__wab_instance", sty.button)}
      />
    </p.Stack>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "avatar", "button"],
  avatar: ["avatar"],
  button: ["button"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  avatar: typeof Avatar;
  button: typeof Button;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicSuggestion__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicSuggestion__VariantsArgs;
    args?: PlasmicSuggestion__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicSuggestion__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicSuggestion__ArgsType, ReservedPropsType> &
    // Specify overrides for each element directly as props
    Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    // Specify props for the root element
    Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicSuggestion__ArgProps,
      internalVariantPropNames: PlasmicSuggestion__VariantProps
    });

    return PlasmicSuggestion__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicSuggestion";
  } else {
    func.displayName = `PlasmicSuggestion.${nodeName}`;
  }
  return func;
}

export const PlasmicSuggestion = Object.assign(
  // Top-level PlasmicSuggestion renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    avatar: makeNodeComponent("avatar"),
    button: makeNodeComponent("button"),

    // Metadata about props expected for PlasmicSuggestion
    internalVariantProps: PlasmicSuggestion__VariantProps,
    internalArgProps: PlasmicSuggestion__ArgProps
  }
);

export default PlasmicSuggestion;
/* prettier-ignore-end */
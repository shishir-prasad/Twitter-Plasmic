// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: aFz13zrZNw9JGADAhhatpj
// Component: Hz-URpgSaVUFtD
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

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_twitter.module.css"; // plasmic-import: aFz13zrZNw9JGADAhhatpj/projectcss
import sty from "./PlasmicSpacer.module.css"; // plasmic-import: Hz-URpgSaVUFtD/css

export type PlasmicSpacer__VariantMembers = {};

export type PlasmicSpacer__VariantsArgs = {};
type VariantPropType = keyof PlasmicSpacer__VariantsArgs;
export const PlasmicSpacer__VariantProps = new Array<VariantPropType>();

export type PlasmicSpacer__ArgsType = {};
type ArgPropType = keyof PlasmicSpacer__ArgsType;
export const PlasmicSpacer__ArgProps = new Array<ArgPropType>();

export type PlasmicSpacer__OverridesType = {
  root?: p.Flex<"div">;
};

export interface DefaultSpacerProps {
  className?: string;
}

function PlasmicSpacer__RenderFunc(props: {
  variants: PlasmicSpacer__VariantsArgs;
  args: PlasmicSpacer__ArgsType;
  overrides: PlasmicSpacer__OverridesType;

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
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        sty.root
      )}
    />
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicSpacer__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicSpacer__VariantsArgs;
    args?: PlasmicSpacer__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicSpacer__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicSpacer__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicSpacer__ArgProps,
      internalVariantPropNames: PlasmicSpacer__VariantProps
    });

    return PlasmicSpacer__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicSpacer";
  } else {
    func.displayName = `PlasmicSpacer.${nodeName}`;
  }
  return func;
}

export const PlasmicSpacer = Object.assign(
  // Top-level PlasmicSpacer renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements

    // Metadata about props expected for PlasmicSpacer
    internalVariantProps: PlasmicSpacer__VariantProps,
    internalArgProps: PlasmicSpacer__ArgProps
  }
);

export default PlasmicSpacer;
/* prettier-ignore-end */

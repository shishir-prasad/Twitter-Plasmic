// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: aFz13zrZNw9JGADAhhatpj
// Component: 8VEl9IDGpHWz4k
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
import ActionButton from "../../ActionButton"; // plasmic-import: ZpCVL7g4OHZGW/component

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_twitter.module.css"; // plasmic-import: aFz13zrZNw9JGADAhhatpj/projectcss
import sty from "./PlasmicTweet.module.css"; // plasmic-import: 8VEl9IDGpHWz4k/css

import IconIcon from "./icons/PlasmicIcon__Icon"; // plasmic-import: cbb3UYiQz3SFv-/icon
import ReplyIcon from "./icons/PlasmicIcon__Reply"; // plasmic-import: GQmS_1oH8Rv5Wy/icon
import RetweetIcon from "./icons/PlasmicIcon__Retweet"; // plasmic-import: zMrdXDEWSX6Xcv/icon
import LikeIcon from "./icons/PlasmicIcon__Like"; // plasmic-import: m0Ibw-EtXag1wT/icon
import ShareIcon from "./icons/PlasmicIcon__Share"; // plasmic-import: 7nRbOstfBJc0p8/icon

export type PlasmicTweet__VariantMembers = {
  options: "hasReplies";
};

export type PlasmicTweet__VariantsArgs = {
  options?: SingleChoiceArg<"hasReplies">;
};

type VariantPropType = keyof PlasmicTweet__VariantsArgs;
export const PlasmicTweet__VariantProps = new Array<VariantPropType>("options");

export type PlasmicTweet__ArgsType = {
  name?: React.ReactNode;
  username?: React.ReactNode;
  children?: React.ReactNode;
  photo?: React.ReactNode;
  timestamp?: React.ReactNode;
};

type ArgPropType = keyof PlasmicTweet__ArgsType;
export const PlasmicTweet__ArgProps = new Array<ArgPropType>(
  "name",
  "username",
  "children",
  "photo",
  "timestamp"
);

export type PlasmicTweet__OverridesType = {
  root?: p.Flex<"div">;
  avatar?: p.Flex<typeof Avatar>;
  text?: p.Flex<"div">;
};

export interface DefaultTweetProps {
  name?: React.ReactNode;
  username?: React.ReactNode;
  children?: React.ReactNode;
  photo?: React.ReactNode;
  timestamp?: React.ReactNode;
  options?: SingleChoiceArg<"hasReplies">;
  className?: string;
}

function PlasmicTweet__RenderFunc(props: {
  variants: PlasmicTweet__VariantsArgs;
  args: PlasmicTweet__ArgsType;
  overrides: PlasmicTweet__OverridesType;

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
    >
      <p.Stack
        as={"div"}
        hasGap={true}
        className={classNames(projectcss.all, sty.freeBox__pDafy)}
      >
        <p.Stack
          as={"div"}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox__mkTai)}
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
                  className={classNames(sty.img___06CA1)}
                  displayHeight={"49px" as const}
                  displayMaxHeight={"none" as const}
                  displayMaxWidth={"none" as const}
                  displayMinHeight={"0" as const}
                  displayMinWidth={"0" as const}
                  displayWidth={"49px" as const}
                  src={{
                    src: "/plasmic/twitter/images/image3.png",
                    fullWidth: 400,
                    fullHeight: 400,
                    aspectRatio: undefined
                  }}
                />
              ),

              value: args.photo
            })}
          </Avatar>

          {(hasVariant(variants, "options", "hasReplies") ? true : false) ? (
            <div
              className={classNames(projectcss.all, sty.freeBox___6I9GW, {
                [sty.freeBoxoptions_hasReplies___6I9GWaz9BS]: hasVariant(
                  variants,
                  "options",
                  "hasReplies"
                )
              })}
            />
          ) : null}
        </p.Stack>
      </p.Stack>

      <p.Stack
        as={"div"}
        hasGap={true}
        className={classNames(projectcss.all, sty.freeBox__egTto)}
      >
        <div className={classNames(projectcss.all, sty.freeBox___0R8C)}>
          <p.Stack
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox__eep7H)}
          >
            <div className={classNames(projectcss.all, sty.freeBox__bDuzi)}>
              <div className={classNames(projectcss.all, sty.freeBox__ge5Xt)}>
                {p.renderPlasmicSlot({
                  defaultContents: "Dan Abramov",
                  value: args.name,
                  className: classNames(sty.slotTargetName)
                })}
              </div>
            </div>

            <div className={classNames(projectcss.all, sty.freeBox___3MUs)}>
              {p.renderPlasmicSlot({
                defaultContents: "@dan_abramov",
                value: args.username,
                className: classNames(sty.slotTargetUsername)
              })}
            </div>

            <div
              data-plasmic-name={"text"}
              data-plasmic-override={overrides.text}
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text
              )}
            >
              {"·"}
            </div>

            {p.renderPlasmicSlot({
              defaultContents: "9h",
              value: args.timestamp,
              className: classNames(sty.slotTargetTimestamp)
            })}
          </p.Stack>

          <ActionButton
            className={classNames("__wab_instance", sty.actionButton__epI5V)}
            slot={"25"}
          >
            <IconIcon
              className={classNames(projectcss.all, sty.svg__r2Nau)}
              role={"img"}
            />
          </ActionButton>
        </div>

        <div className={classNames(projectcss.all, sty.freeBox__yr3Zl)}>
          {p.renderPlasmicSlot({
            defaultContents:
              "Is anyone intentionally using multiple versions of React? (Yeah I know this is generally frowned upon but sometimes you have no other good options for legacy reasons.) I want to know how your build is set up to handle code sharing.",
            value: args.children
          })}
        </div>

        <div className={classNames(projectcss.all, sty.freeBox__iob3L)}>
          <ActionButton
            className={classNames("__wab_instance", sty.actionButton__txHP)}
            options={["labeled"]}
            slot={"25"}
          >
            <ReplyIcon
              className={classNames(projectcss.all, sty.svg__iH6Az)}
              role={"img"}
            />
          </ActionButton>

          <ActionButton
            className={classNames("__wab_instance", sty.actionButton___5FlDc)}
            options={["labeled"]}
            slot={"25"}
          >
            <RetweetIcon
              className={classNames(projectcss.all, sty.svg__nKbeW)}
              role={"img"}
            />
          </ActionButton>

          <ActionButton
            className={classNames("__wab_instance", sty.actionButton__aAwgp)}
            options={["labeled"]}
            slot={"25"}
          >
            <LikeIcon
              className={classNames(projectcss.all, sty.svg__iejXh)}
              role={"img"}
            />
          </ActionButton>

          <ActionButton
            className={classNames("__wab_instance", sty.actionButton__mnxsy)}
            slot={"25"}
          >
            <ShareIcon
              className={classNames(projectcss.all, sty.svg___8YdWf)}
              role={"img"}
            />
          </ActionButton>
        </div>
      </p.Stack>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "avatar", "text"],
  avatar: ["avatar"],
  text: ["text"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  avatar: typeof Avatar;
  text: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicTweet__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicTweet__VariantsArgs;
    args?: PlasmicTweet__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicTweet__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicTweet__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicTweet__ArgProps,
      internalVariantPropNames: PlasmicTweet__VariantProps
    });

    return PlasmicTweet__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicTweet";
  } else {
    func.displayName = `PlasmicTweet.${nodeName}`;
  }
  return func;
}

export const PlasmicTweet = Object.assign(
  // Top-level PlasmicTweet renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    avatar: makeNodeComponent("avatar"),
    text: makeNodeComponent("text"),

    // Metadata about props expected for PlasmicTweet
    internalVariantProps: PlasmicTweet__VariantProps,
    internalArgProps: PlasmicTweet__ArgProps
  }
);

export default PlasmicTweet;
/* prettier-ignore-end */

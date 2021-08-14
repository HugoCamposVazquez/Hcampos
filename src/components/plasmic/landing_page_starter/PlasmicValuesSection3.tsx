// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: dbHGYj6bAT5a9puw4ZPFAE
// Component: eSl55x41OoSE
import * as React from "react";

import * as p from "@plasmicapp/react-web";

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
import Valueprop from "../../Valueprop"; // plasmic-import: iqLVo_SBs1q1/component

import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_landing_page_starter.module.css"; // plasmic-import: dbHGYj6bAT5a9puw4ZPFAE/projectcss
import * as sty from "./PlasmicValuesSection3.module.css"; // plasmic-import: eSl55x41OoSE/css

import Icon14Icon from "./icons/PlasmicIcon__Icon14"; // plasmic-import: wbpeHCM_Sln2/icon
import Icon8Icon from "./icons/PlasmicIcon__Icon8"; // plasmic-import: xgFvDdTt8WnB/icon

export type PlasmicValuesSection3__VariantMembers = {};

export type PlasmicValuesSection3__VariantsArgs = {};
type VariantPropType = keyof PlasmicValuesSection3__VariantsArgs;
export const PlasmicValuesSection3__VariantProps = new Array<VariantPropType>();

export type PlasmicValuesSection3__ArgsType = {
  foreground?: React.ReactNode;
};

type ArgPropType = keyof PlasmicValuesSection3__ArgsType;
export const PlasmicValuesSection3__ArgProps = new Array<ArgPropType>(
  "foreground"
);

export type PlasmicValuesSection3__OverridesType = {
  root?: p.Flex<"section">;
  foreground?: p.Flex<"div">;
};

export interface DefaultValuesSection3Props {
  foreground?: React.ReactNode;
  className?: string;
}

function PlasmicValuesSection3__RenderFunc(props: {
  variants: PlasmicValuesSection3__VariantsArgs;
  args: PlasmicValuesSection3__ArgsType;
  overrides: PlasmicValuesSection3__OverridesType;
  dataFetches?: PlasmicValuesSection3__Fetches;
  forNode?: string;
}) {
  const { variants, args, overrides, forNode, dataFetches } = props;

  return (
    <section
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(defaultcss.all, projectcss.root_reset, sty.root)}
    >
      <p.Stack
        as={"div"}
        data-plasmic-name={"foreground"}
        data-plasmic-override={overrides.foreground}
        hasGap={true}
        className={classNames(defaultcss.all, sty.foreground)}
      >
        {p.renderPlasmicSlot({
          defaultContents: (
            <React.Fragment>
              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(defaultcss.all, sty.freeBox__t8E4B)}
              >
                <div className={classNames(defaultcss.all, sty.freeBox__b6Gp0)}>
                  <h2
                    className={classNames(
                      defaultcss.h2,
                      defaultcss.__wab_text,
                      sty.h2__rlOot
                    )}
                  >
                    {"Proposing values"}
                  </h2>
                </div>

                <div
                  className={classNames(
                    defaultcss.all,
                    defaultcss.__wab_text,
                    sty.freeBox__zwtbq
                  )}
                >
                  {
                    "Consectetur a adipiscing sagittis sed proin libero himenaeos ornare adipiscing suscipit leo vestibulum facilisi consequat nisi nisi adipiscing habitant facilisis suspendisse hac integer eget quam facilisis sem placerat fames."
                  }
                </div>
              </p.Stack>

              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(defaultcss.all, sty.freeBox__gb33K)}
              >
                <p.Stack
                  as={"div"}
                  hasGap={true}
                  className={classNames(defaultcss.all, sty.freeBox__dmsZc)}
                >
                  <Valueprop
                    className={classNames(
                      "__wab_instance",
                      sty.valueprop__brHRf
                    )}
                    flat={"flat" as const}
                    slot={
                      "Nulla odio mauris enim parturient adipiscing vestibulum inceptos."
                    }
                    slot2={
                      <Icon14Icon
                        className={classNames(defaultcss.all, sty.svg__mEHvO)}
                        role={"img"}
                      />
                    }
                  >
                    {"Powerful"}
                  </Valueprop>

                  <Valueprop
                    className={classNames(
                      "__wab_instance",
                      sty.valueprop___72NM
                    )}
                    flat={"flat" as const}
                    slot={"Consequat scelerisque a eros taciti nisl a sodales."}
                    slot2={
                      <Icon14Icon
                        className={classNames(defaultcss.all, sty.svg__xz8Wn)}
                        role={"img"}
                      />
                    }
                  >
                    {"Faster"}
                  </Valueprop>

                  <Valueprop
                    className={classNames(
                      "__wab_instance",
                      sty.valueprop__ohUb6
                    )}
                    flat={"flat" as const}
                    slot={"At ut condimentum amet adipiscing ac diam a."}
                    slot2={
                      <Icon14Icon
                        className={classNames(defaultcss.all, sty.svg__sKDtt)}
                        role={"img"}
                      />
                    }
                  >
                    {"Best and brightest"}
                  </Valueprop>

                  <Valueprop
                    className={classNames(
                      "__wab_instance",
                      sty.valueprop__aCaIg
                    )}
                    flat={"flat" as const}
                    slot={
                      "Donec purus nec vestibulum volutpat vivamus vulputate suspendisse."
                    }
                    slot2={
                      <Icon14Icon
                        className={classNames(defaultcss.all, sty.svg___1Glhv)}
                        role={"img"}
                      />
                    }
                  >
                    <div
                      className={classNames(
                        defaultcss.all,
                        defaultcss.__wab_text,
                        sty.freeBox__bP5Zv
                      )}
                    >
                      {"Dynamic range"}
                    </div>
                  </Valueprop>
                </p.Stack>
              </p.Stack>

              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(defaultcss.all, sty.freeBox___0EcRv)}
              >
                <p.Stack
                  as={"div"}
                  hasGap={true}
                  className={classNames(defaultcss.all, sty.freeBox___6AvM3)}
                >
                  <Valueprop
                    className={classNames(
                      "__wab_instance",
                      sty.valueprop__fDbwb
                    )}
                    flat={"flat" as const}
                    slot={"Commodo pretium himenaeos nisi potenti ad in ante."}
                    slot2={
                      <Icon14Icon
                        className={classNames(defaultcss.all, sty.svg__kxXt)}
                        role={"img"}
                      />
                    }
                  >
                    <div
                      className={classNames(
                        defaultcss.all,
                        defaultcss.__wab_text,
                        sty.freeBox__ipAsy
                      )}
                    >
                      {"Portable"}
                    </div>
                  </Valueprop>

                  <Valueprop
                    className={classNames(
                      "__wab_instance",
                      sty.valueprop__yp9Kp
                    )}
                    flat={"flat" as const}
                    slot={"Magna ullamcorper ut arcu nisi a per facilisis."}
                    slot2={
                      <Icon14Icon
                        className={classNames(defaultcss.all, sty.svg__eNl3N)}
                        role={"img"}
                      />
                    }
                  >
                    {"Production-ready"}
                  </Valueprop>

                  <Valueprop
                    className={classNames(
                      "__wab_instance",
                      sty.valueprop__a9EfY
                    )}
                    flat={"flat" as const}
                    slot={
                      "Ac lobortis praesent sagittis dictumst fermentum vestibulum nunc."
                    }
                    slot2={
                      <Icon14Icon
                        className={classNames(defaultcss.all, sty.svg__rqpj1)}
                        role={"img"}
                      />
                    }
                  >
                    {"Magical"}
                  </Valueprop>

                  <Valueprop
                    className={classNames(
                      "__wab_instance",
                      sty.valueprop___0R9F2
                    )}
                    flat={"flat" as const}
                    slot={"A parturient mi suspendisse nisl inceptos nullam a."}
                    slot2={
                      <Icon14Icon
                        className={classNames(defaultcss.all, sty.svg__e5QWc)}
                        role={"img"}
                      />
                    }
                  >
                    {"Accessible"}
                  </Valueprop>
                </p.Stack>
              </p.Stack>
            </React.Fragment>
          ),
          value: args.foreground
        })}
      </p.Stack>
    </section>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "foreground"],
  foreground: ["foreground"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "section";
  foreground: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicValuesSection3__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicValuesSection3__VariantsArgs;
    args?: PlasmicValuesSection3__ArgsType;
    overrides?: NodeOverridesType<T>;
    dataFetches?: PlasmicValuesSection3__Fetches;
  } & Omit<PlasmicValuesSection3__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicValuesSection3__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicValuesSection3__ArgProps,
      internalVariantPropNames: PlasmicValuesSection3__VariantProps
    });

    const { dataFetches } = props;

    return PlasmicValuesSection3__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicValuesSection3";
  } else {
    func.displayName = `PlasmicValuesSection3.${nodeName}`;
  }
  return func;
}

export const PlasmicValuesSection3 = Object.assign(
  // Top-level PlasmicValuesSection3 renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    foreground: makeNodeComponent("foreground"),

    // Metadata about props expected for PlasmicValuesSection3
    internalVariantProps: PlasmicValuesSection3__VariantProps,
    internalArgProps: PlasmicValuesSection3__ArgProps
  }
);

export default PlasmicValuesSection3;
/* prettier-ignore-end */

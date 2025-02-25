import {StyleAst} from "./parser/ast";

export type StylesLookupTable = Record<string, string[]>;

export interface CacheLine {
  tail: string;
}

export type StyleFiles = Record<string, string>;

export type StyleDef = Record<string, Record<string, boolean>>;
export type UsedTypes = string[];
export type UsedTypesRef = Record<string, boolean>;

export interface SyncStyleDefinition {
  isReady: true;
  lookup: StylesLookupTable;
  ast: StyleAst;
}

export interface StyleChunk {
  file: string,
  css: string;
}

export type FlagType = Record<string, boolean>

export interface StyleDefinition {
  isReady: boolean;
  lookup: StylesLookupTable;
  ast: StyleAst;
  urlPrefix: string;
  then(resolve?: () => void, reject?: () => void): Promise<void>;
}
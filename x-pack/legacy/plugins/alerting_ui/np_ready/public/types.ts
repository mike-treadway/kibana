/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License;
 * you may not use this file except in compliance with the Elastic License.
 */
export interface Props {
  action: Action;
  editActionConfig: (property: string, value: any) => void;
  editActionSecrets: (property: string, value: any) => void;
  errors: { [key: string]: string[] };
  hasErrors?: boolean;
}

export interface ActionTypeModel {
  id: string;
  iconClass: string;
  selectMessage: string;
  validate: (action: Action) => ValidationResult;
  actionFields: React.FunctionComponent<Props> | null;
}

export interface ValidationResult {
  errors: Record<string, any>;
}

export interface ActionType {
  id: string;
  name: string;
}

export interface Action {
  secrets: Record<string, any>;
  id: string;
  actionTypeId: string;
  description: string;
  config: Record<string, any>;
}
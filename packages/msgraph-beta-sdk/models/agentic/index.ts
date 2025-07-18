/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { type AdditionalDataHolder, type BackedModel, type BackingStore, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export interface AgentSignIn extends AdditionalDataHolder, BackedModel, Parsable {
    /**
     * The agentType property
     */
    agentType?: AgentType | null;
    /**
     * Stores model information.
     */
    backingStoreEnabled?: boolean | null;
    /**
     * The OdataType property
     */
    odataType?: string | null;
    /**
     * The ID of the parent application for agentic instances.
     */
    parentAppId?: string | null;
}
export type AgentType = (typeof AgentTypeObject)[keyof typeof AgentTypeObject];
/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns {AgentSignIn}
 */
// @ts-ignore
export function createAgentSignInFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoAgentSignIn;
}
/**
 * The deserialization information for the current model
 * @param AgentSignIn The instance to deserialize into.
 * @returns {Record<string, (node: ParseNode) => void>}
 */
// @ts-ignore
export function deserializeIntoAgentSignIn(agentSignIn: Partial<AgentSignIn> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "agentType": n => { agentSignIn.agentType = n.getEnumValue<AgentType>(AgentTypeObject); },
        "backingStoreEnabled": n => { agentSignIn.backingStoreEnabled = true; },
        "@odata.type": n => { agentSignIn.odataType = n.getStringValue(); },
        "parentAppId": n => { agentSignIn.parentAppId = n.getStringValue(); },
    }
}
/**
 * Serializes information the current object
 * @param AgentSignIn The instance to serialize from.
 * @param isSerializingDerivedType A boolean indicating whether the serialization is for a derived type.
 * @param writer Serialization writer to use to serialize this model
 */
// @ts-ignore
export function serializeAgentSignIn(writer: SerializationWriter, agentSignIn: Partial<AgentSignIn> | undefined | null = {}, isSerializingDerivedType: boolean = false) : void {
    if (!agentSignIn || isSerializingDerivedType) { return; }
    writer.writeEnumValue<AgentType>("agentType", agentSignIn.agentType);
    writer.writeStringValue("@odata.type", agentSignIn.odataType);
    writer.writeStringValue("parentAppId", agentSignIn.parentAppId);
    writer.writeAdditionalData(agentSignIn.additionalData);
}
export const AgentTypeObject = {
    NotAgentic: "notAgentic",
    AgenticAppBuilder: "agenticAppBuilder",
    AgenticApp: "agenticApp",
    AgenticAppInstance: "agenticAppInstance",
    UnknownFutureValue: "unknownFutureValue",
} as const;
/* tslint:enable */
/* eslint-enable */

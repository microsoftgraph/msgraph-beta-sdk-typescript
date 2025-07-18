/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/index.js';
// @ts-ignore
import { type AdditionalDataHolder, type BackedModel, type BackingStore, type BaseRequestBuilder, type Parsable, type ParsableFactory, type ParseNode, type RequestConfiguration, type RequestInformation, type RequestsMetadata, type SerializationWriter } from '@microsoft/kiota-abstractions';

/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns {UnarchivePostRequestBody}
 */
// @ts-ignore
export function createUnarchivePostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoUnarchivePostRequestBody;
}
/**
 * The deserialization information for the current model
 * @param UnarchivePostRequestBody The instance to deserialize into.
 * @returns {Record<string, (node: ParseNode) => void>}
 */
// @ts-ignore
export function deserializeIntoUnarchivePostRequestBody(unarchivePostRequestBody: Partial<UnarchivePostRequestBody> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "backingStoreEnabled": n => { unarchivePostRequestBody.backingStoreEnabled = true; },
        "justification": n => { unarchivePostRequestBody.justification = n.getStringValue(); },
    }
}
/**
 * Serializes information the current object
 * @param isSerializingDerivedType A boolean indicating whether the serialization is for a derived type.
 * @param UnarchivePostRequestBody The instance to serialize from.
 * @param writer Serialization writer to use to serialize this model
 */
// @ts-ignore
export function serializeUnarchivePostRequestBody(writer: SerializationWriter, unarchivePostRequestBody: Partial<UnarchivePostRequestBody> | undefined | null = {}, isSerializingDerivedType: boolean = false) : void {
    if (!unarchivePostRequestBody || isSerializingDerivedType) { return; }
    writer.writeStringValue("justification", unarchivePostRequestBody.justification);
    writer.writeAdditionalData(unarchivePostRequestBody.additionalData);
}
export interface UnarchivePostRequestBody extends AdditionalDataHolder, BackedModel, Parsable {
    /**
     * Stores model information.
     */
    backingStoreEnabled?: boolean | null;
    /**
     * The justification property
     */
    justification?: string | null;
}
/**
 * Provides operations to call the unarchive method.
 */
export interface UnarchiveRequestBuilder extends BaseRequestBuilder<UnarchiveRequestBuilder> {
    /**
     * Unarchive a plannerPlan object. Unarchiving a plan, also unarchives the plannerTasks and plannerBuckets in the plan.  Only a plan that is archived can be unarchived.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     * @see {@link https://learn.microsoft.com/graph/api/plannerplan-unarchive?view=graph-rest-beta|Find more info here}
     */
     post(body: UnarchivePostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<void>;
    /**
     * Unarchive a plannerPlan object. Unarchiving a plan, also unarchives the plannerTasks and plannerBuckets in the plan.  Only a plan that is archived can be unarchived.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPostRequestInformation(body: UnarchivePostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Uri template for the request builder.
 */
export const UnarchiveRequestBuilderUriTemplate = "{+baseurl}/groups/{group%2Did}/planner/plans/{plannerPlan%2Did}/unarchive";
/**
 * Metadata for all the requests in the request builder.
 */
export const UnarchiveRequestBuilderRequestsMetadata: RequestsMetadata = {
    post: {
        uriTemplate: UnarchiveRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendNoResponseContent",
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeUnarchivePostRequestBody,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */

/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createGroupPolicyDefinitionValueFromDiscriminatorValue, serializeGroupPolicyDefinitionValue, type GroupPolicyDefinitionValue } from '@microsoft/msgraph-beta-sdk/models/index.js';
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/index.js';
// @ts-ignore
import { type AdditionalDataHolder, type BackedModel, type BackingStore, type BaseRequestBuilder, type Parsable, type ParsableFactory, type ParseNode, type RequestConfiguration, type RequestInformation, type RequestsMetadata, type SerializationWriter } from '@microsoft/kiota-abstractions';

/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns {UpdateDefinitionValuesPostRequestBody}
 */
// @ts-ignore
export function createUpdateDefinitionValuesPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoUpdateDefinitionValuesPostRequestBody;
}
/**
 * The deserialization information for the current model
 * @param UpdateDefinitionValuesPostRequestBody The instance to deserialize into.
 * @returns {Record<string, (node: ParseNode) => void>}
 */
// @ts-ignore
export function deserializeIntoUpdateDefinitionValuesPostRequestBody(updateDefinitionValuesPostRequestBody: Partial<UpdateDefinitionValuesPostRequestBody> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "added": n => { updateDefinitionValuesPostRequestBody.added = n.getCollectionOfObjectValues<GroupPolicyDefinitionValue>(createGroupPolicyDefinitionValueFromDiscriminatorValue); },
        "backingStoreEnabled": n => { updateDefinitionValuesPostRequestBody.backingStoreEnabled = true; },
        "deletedIds": n => { updateDefinitionValuesPostRequestBody.deletedIds = n.getCollectionOfPrimitiveValues<string>(); },
        "updated": n => { updateDefinitionValuesPostRequestBody.updated = n.getCollectionOfObjectValues<GroupPolicyDefinitionValue>(createGroupPolicyDefinitionValueFromDiscriminatorValue); },
    }
}
/**
 * Serializes information the current object
 * @param isSerializingDerivedType A boolean indicating whether the serialization is for a derived type.
 * @param UpdateDefinitionValuesPostRequestBody The instance to serialize from.
 * @param writer Serialization writer to use to serialize this model
 */
// @ts-ignore
export function serializeUpdateDefinitionValuesPostRequestBody(writer: SerializationWriter, updateDefinitionValuesPostRequestBody: Partial<UpdateDefinitionValuesPostRequestBody> | undefined | null = {}, isSerializingDerivedType: boolean = false) : void {
    if (!updateDefinitionValuesPostRequestBody || isSerializingDerivedType) { return; }
    writer.writeCollectionOfObjectValues<GroupPolicyDefinitionValue>("added", updateDefinitionValuesPostRequestBody.added, serializeGroupPolicyDefinitionValue);
    writer.writeCollectionOfPrimitiveValues<string>("deletedIds", updateDefinitionValuesPostRequestBody.deletedIds);
    writer.writeCollectionOfObjectValues<GroupPolicyDefinitionValue>("updated", updateDefinitionValuesPostRequestBody.updated, serializeGroupPolicyDefinitionValue);
    writer.writeAdditionalData(updateDefinitionValuesPostRequestBody.additionalData);
}
export interface UpdateDefinitionValuesPostRequestBody extends AdditionalDataHolder, BackedModel, Parsable {
    /**
     * The added property
     */
    added?: GroupPolicyDefinitionValue[] | null;
    /**
     * Stores model information.
     */
    backingStoreEnabled?: boolean | null;
    /**
     * The deletedIds property
     */
    deletedIds?: string[] | null;
    /**
     * The updated property
     */
    updated?: GroupPolicyDefinitionValue[] | null;
}
/**
 * Provides operations to call the updateDefinitionValues method.
 */
export interface UpdateDefinitionValuesRequestBuilder extends BaseRequestBuilder<UpdateDefinitionValuesRequestBuilder> {
    /**
     * Invoke action updateDefinitionValues
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     post(body: UpdateDefinitionValuesPostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<void>;
    /**
     * Invoke action updateDefinitionValues
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPostRequestInformation(body: UpdateDefinitionValuesPostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Uri template for the request builder.
 */
export const UpdateDefinitionValuesRequestBuilderUriTemplate = "{+baseurl}/deviceManagement/groupPolicyConfigurations/{groupPolicyConfiguration%2Did}/updateDefinitionValues";
/**
 * Metadata for all the requests in the request builder.
 */
export const UpdateDefinitionValuesRequestBuilderRequestsMetadata: RequestsMetadata = {
    post: {
        uriTemplate: UpdateDefinitionValuesRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendNoResponseContent",
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeUpdateDefinitionValuesPostRequestBody,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */

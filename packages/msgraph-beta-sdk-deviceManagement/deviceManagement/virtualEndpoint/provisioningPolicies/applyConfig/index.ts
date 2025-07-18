/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { CloudPcPolicySettingType, CloudPcPolicySettingTypeObject } from '@microsoft/msgraph-beta-sdk/models/index.js';
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/index.js';
// @ts-ignore
import { type AdditionalDataHolder, type BackedModel, type BackingStore, type BaseRequestBuilder, type Parsable, type ParsableFactory, type ParseNode, type RequestConfiguration, type RequestInformation, type RequestsMetadata, type SerializationWriter } from '@microsoft/kiota-abstractions';

export interface ApplyConfigPostRequestBody extends AdditionalDataHolder, BackedModel, Parsable {
    /**
     * Stores model information.
     */
    backingStoreEnabled?: boolean | null;
    /**
     * The cloudPcIds property
     */
    cloudPcIds?: string[] | null;
    /**
     * The policySettings property
     */
    policySettings?: CloudPcPolicySettingType[] | null;
}
/**
 * Provides operations to call the applyConfig method.
 */
export interface ApplyConfigRequestBuilder extends BaseRequestBuilder<ApplyConfigRequestBuilder> {
    /**
     * Update the provisioning policy configuration for a set of Cloud PC devices by their IDs. This method supports retry and allows you to apply the configuration to a subset of Cloud PCs initially to test.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     * @see {@link https://learn.microsoft.com/graph/api/cloudpcprovisioningpolicy-applyconfig?view=graph-rest-beta|Find more info here}
     */
     post(body: ApplyConfigPostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<void>;
    /**
     * Update the provisioning policy configuration for a set of Cloud PC devices by their IDs. This method supports retry and allows you to apply the configuration to a subset of Cloud PCs initially to test.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPostRequestInformation(body: ApplyConfigPostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns {ApplyConfigPostRequestBody}
 */
// @ts-ignore
export function createApplyConfigPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoApplyConfigPostRequestBody;
}
/**
 * The deserialization information for the current model
 * @param ApplyConfigPostRequestBody The instance to deserialize into.
 * @returns {Record<string, (node: ParseNode) => void>}
 */
// @ts-ignore
export function deserializeIntoApplyConfigPostRequestBody(applyConfigPostRequestBody: Partial<ApplyConfigPostRequestBody> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "backingStoreEnabled": n => { applyConfigPostRequestBody.backingStoreEnabled = true; },
        "cloudPcIds": n => { applyConfigPostRequestBody.cloudPcIds = n.getCollectionOfPrimitiveValues<string>(); },
        "policySettings": n => { applyConfigPostRequestBody.policySettings = n.getCollectionOfEnumValues<CloudPcPolicySettingType>(CloudPcPolicySettingTypeObject); },
    }
}
/**
 * Serializes information the current object
 * @param ApplyConfigPostRequestBody The instance to serialize from.
 * @param isSerializingDerivedType A boolean indicating whether the serialization is for a derived type.
 * @param writer Serialization writer to use to serialize this model
 */
// @ts-ignore
export function serializeApplyConfigPostRequestBody(writer: SerializationWriter, applyConfigPostRequestBody: Partial<ApplyConfigPostRequestBody> | undefined | null = {}, isSerializingDerivedType: boolean = false) : void {
    if (!applyConfigPostRequestBody || isSerializingDerivedType) { return; }
    writer.writeCollectionOfPrimitiveValues<string>("cloudPcIds", applyConfigPostRequestBody.cloudPcIds);
    writer.writeEnumValue<CloudPcPolicySettingType[]>("policySettings", applyConfigPostRequestBody.policySettings);
    writer.writeAdditionalData(applyConfigPostRequestBody.additionalData);
}
/**
 * Uri template for the request builder.
 */
export const ApplyConfigRequestBuilderUriTemplate = "{+baseurl}/deviceManagement/virtualEndpoint/provisioningPolicies/applyConfig";
/**
 * Metadata for all the requests in the request builder.
 */
export const ApplyConfigRequestBuilderRequestsMetadata: RequestsMetadata = {
    post: {
        uriTemplate: ApplyConfigRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendNoResponseContent",
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeApplyConfigPostRequestBody,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */

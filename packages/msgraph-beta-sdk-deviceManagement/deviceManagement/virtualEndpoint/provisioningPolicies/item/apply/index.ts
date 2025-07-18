/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { CloudPcPolicySettingType, CloudPcPolicySettingTypeObject } from '@microsoft/msgraph-beta-sdk/models/index.js';
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/index.js';
// @ts-ignore
import { type AdditionalDataHolder, type BackedModel, type BackingStore, type BaseRequestBuilder, type Parsable, type ParsableFactory, type ParseNode, type RequestConfiguration, type RequestInformation, type RequestsMetadata, type SerializationWriter } from '@microsoft/kiota-abstractions';

export interface ApplyPostRequestBody extends AdditionalDataHolder, BackedModel, Parsable {
    /**
     * Stores model information.
     */
    backingStoreEnabled?: boolean | null;
    /**
     * The policySettings property
     */
    policySettings?: CloudPcPolicySettingType[] | null;
    /**
     * The reservePercentage property
     */
    reservePercentage?: number | null;
}
/**
 * Provides operations to call the apply method.
 */
export interface ApplyRequestBuilder extends BaseRequestBuilder<ApplyRequestBuilder> {
    /**
     * Apply the current provisioning policy configuration to all Cloud PC devices under a specified policy. Currently, the region is the only policy setting that you can apply.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     * @see {@link https://learn.microsoft.com/graph/api/cloudpcprovisioningpolicy-apply?view=graph-rest-beta|Find more info here}
     */
     post(body: ApplyPostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<void>;
    /**
     * Apply the current provisioning policy configuration to all Cloud PC devices under a specified policy. Currently, the region is the only policy setting that you can apply.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPostRequestInformation(body: ApplyPostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns {ApplyPostRequestBody}
 */
// @ts-ignore
export function createApplyPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoApplyPostRequestBody;
}
/**
 * The deserialization information for the current model
 * @param ApplyPostRequestBody The instance to deserialize into.
 * @returns {Record<string, (node: ParseNode) => void>}
 */
// @ts-ignore
export function deserializeIntoApplyPostRequestBody(applyPostRequestBody: Partial<ApplyPostRequestBody> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "backingStoreEnabled": n => { applyPostRequestBody.backingStoreEnabled = true; },
        "policySettings": n => { applyPostRequestBody.policySettings = n.getCollectionOfEnumValues<CloudPcPolicySettingType>(CloudPcPolicySettingTypeObject); },
        "reservePercentage": n => { applyPostRequestBody.reservePercentage = n.getNumberValue(); },
    }
}
/**
 * Serializes information the current object
 * @param ApplyPostRequestBody The instance to serialize from.
 * @param isSerializingDerivedType A boolean indicating whether the serialization is for a derived type.
 * @param writer Serialization writer to use to serialize this model
 */
// @ts-ignore
export function serializeApplyPostRequestBody(writer: SerializationWriter, applyPostRequestBody: Partial<ApplyPostRequestBody> | undefined | null = {}, isSerializingDerivedType: boolean = false) : void {
    if (!applyPostRequestBody || isSerializingDerivedType) { return; }
    writer.writeEnumValue<CloudPcPolicySettingType[]>("policySettings", applyPostRequestBody.policySettings);
    writer.writeNumberValue("reservePercentage", applyPostRequestBody.reservePercentage);
    writer.writeAdditionalData(applyPostRequestBody.additionalData);
}
/**
 * Uri template for the request builder.
 */
export const ApplyRequestBuilderUriTemplate = "{+baseurl}/deviceManagement/virtualEndpoint/provisioningPolicies/{cloudPcProvisioningPolicy%2Did}/apply";
/**
 * Metadata for all the requests in the request builder.
 */
export const ApplyRequestBuilderRequestsMetadata: RequestsMetadata = {
    post: {
        uriTemplate: ApplyRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendNoResponseContent",
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeApplyPostRequestBody,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */

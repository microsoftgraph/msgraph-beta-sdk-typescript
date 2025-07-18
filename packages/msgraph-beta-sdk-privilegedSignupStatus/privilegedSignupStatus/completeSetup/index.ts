/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createRoleSuccessStatisticsFromDiscriminatorValue, createTenantSetupInfoFromDiscriminatorValue, deserializeIntoBaseCollectionPaginationCountResponse, serializeBaseCollectionPaginationCountResponse, serializeRoleSuccessStatistics, serializeTenantSetupInfo, type BaseCollectionPaginationCountResponse, type RoleSuccessStatistics, type TenantSetupInfo } from '@microsoft/msgraph-beta-sdk/models/index.js';
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/index.js';
// @ts-ignore
import { type AdditionalDataHolder, type BackedModel, type BackingStore, type BaseRequestBuilder, type Parsable, type ParsableFactory, type ParseNode, type RequestConfiguration, type RequestInformation, type RequestsMetadata, type SerializationWriter } from '@microsoft/kiota-abstractions';

export interface CompleteSetupPostRequestBody extends AdditionalDataHolder, BackedModel, Parsable {
    /**
     * Stores model information.
     */
    backingStoreEnabled?: boolean | null;
    /**
     * The tenantSetupInfo property
     */
    tenantSetupInfo?: TenantSetupInfo | null;
}
export interface CompleteSetupPostResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: RoleSuccessStatistics[] | null;
}
/**
 * Provides operations to call the completeSetup method.
 */
export interface CompleteSetupRequestBuilder extends BaseRequestBuilder<CompleteSetupRequestBuilder> {
    /**
     * Invoke action completeSetup
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<CompleteSetupPostResponse>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     post(body: CompleteSetupPostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<CompleteSetupPostResponse | undefined>;
    /**
     * Invoke action completeSetup
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPostRequestInformation(body: CompleteSetupPostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns {CompleteSetupPostRequestBody}
 */
// @ts-ignore
export function createCompleteSetupPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoCompleteSetupPostRequestBody;
}
/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns {CompleteSetupPostResponse}
 */
// @ts-ignore
export function createCompleteSetupPostResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoCompleteSetupPostResponse;
}
/**
 * The deserialization information for the current model
 * @param CompleteSetupPostRequestBody The instance to deserialize into.
 * @returns {Record<string, (node: ParseNode) => void>}
 */
// @ts-ignore
export function deserializeIntoCompleteSetupPostRequestBody(completeSetupPostRequestBody: Partial<CompleteSetupPostRequestBody> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "backingStoreEnabled": n => { completeSetupPostRequestBody.backingStoreEnabled = true; },
        "tenantSetupInfo": n => { completeSetupPostRequestBody.tenantSetupInfo = n.getObjectValue<TenantSetupInfo>(createTenantSetupInfoFromDiscriminatorValue); },
    }
}
/**
 * The deserialization information for the current model
 * @param CompleteSetupPostResponse The instance to deserialize into.
 * @returns {Record<string, (node: ParseNode) => void>}
 */
// @ts-ignore
export function deserializeIntoCompleteSetupPostResponse(completeSetupPostResponse: Partial<CompleteSetupPostResponse> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(completeSetupPostResponse),
        "value": n => { completeSetupPostResponse.value = n.getCollectionOfObjectValues<RoleSuccessStatistics>(createRoleSuccessStatisticsFromDiscriminatorValue); },
    }
}
/**
 * Serializes information the current object
 * @param CompleteSetupPostRequestBody The instance to serialize from.
 * @param isSerializingDerivedType A boolean indicating whether the serialization is for a derived type.
 * @param writer Serialization writer to use to serialize this model
 */
// @ts-ignore
export function serializeCompleteSetupPostRequestBody(writer: SerializationWriter, completeSetupPostRequestBody: Partial<CompleteSetupPostRequestBody> | undefined | null = {}, isSerializingDerivedType: boolean = false) : void {
    if (!completeSetupPostRequestBody || isSerializingDerivedType) { return; }
    writer.writeObjectValue<TenantSetupInfo>("tenantSetupInfo", completeSetupPostRequestBody.tenantSetupInfo, serializeTenantSetupInfo);
    writer.writeAdditionalData(completeSetupPostRequestBody.additionalData);
}
/**
 * Serializes information the current object
 * @param CompleteSetupPostResponse The instance to serialize from.
 * @param isSerializingDerivedType A boolean indicating whether the serialization is for a derived type.
 * @param writer Serialization writer to use to serialize this model
 */
// @ts-ignore
export function serializeCompleteSetupPostResponse(writer: SerializationWriter, completeSetupPostResponse: Partial<CompleteSetupPostResponse> | undefined | null = {}, isSerializingDerivedType: boolean = false) : void {
    if (!completeSetupPostResponse || isSerializingDerivedType) { return; }
    serializeBaseCollectionPaginationCountResponse(writer, completeSetupPostResponse, isSerializingDerivedType)
    writer.writeCollectionOfObjectValues<RoleSuccessStatistics>("value", completeSetupPostResponse.value, serializeRoleSuccessStatistics);
}
/**
 * Uri template for the request builder.
 */
export const CompleteSetupRequestBuilderUriTemplate = "{+baseurl}/privilegedSignupStatus/completeSetup";
/**
 * Metadata for all the requests in the request builder.
 */
export const CompleteSetupRequestBuilderRequestsMetadata: RequestsMetadata = {
    post: {
        uriTemplate: CompleteSetupRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createCompleteSetupPostResponseFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeCompleteSetupPostRequestBody,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */

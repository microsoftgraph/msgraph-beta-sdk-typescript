/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
import { createRoleSuccessStatisticsFromDiscriminatorValue, createTenantSetupInfoFromDiscriminatorValue, deserializeIntoBaseCollectionPaginationCountResponse, serializeBaseCollectionPaginationCountResponse, serializeRoleSuccessStatistics, serializeTenantSetupInfo, type BaseCollectionPaginationCountResponse, type RoleSuccessStatistics, type TenantSetupInfo } from '@microsoft/msgraph-beta-sdk/models/';
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/';
import { type AdditionalDataHolder, type BackedModel, type BackingStore, type BaseRequestBuilder, type Parsable, type ParsableFactory, type ParseNode, type RequestConfiguration, type RequestInformation, type RequestsMetadata, type SerializationWriter } from '@microsoft/kiota-abstractions';

export interface CompleteSetupPostRequestBody extends AdditionalDataHolder, BackedModel, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * Stores model information.
     */
    backingStoreEnabled?: boolean;
    /**
     * The tenantSetupInfo property
     */
    tenantSetupInfo?: TenantSetupInfo;
}
export interface CompleteSetupPostResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: RoleSuccessStatistics[];
}
/**
 * Provides operations to call the completeSetup method.
 */
export interface CompleteSetupRequestBuilder extends BaseRequestBuilder<CompleteSetupRequestBuilder> {
    /**
     * Invoke action completeSetup
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of CompleteSetupPostResponse
     */
     post(body: CompleteSetupPostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<CompleteSetupPostResponse | undefined>;
    /**
     * Invoke action completeSetup
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toPostRequestInformation(body: CompleteSetupPostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns a completeSetupPostRequestBody
 */
export function createCompleteSetupPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoCompleteSetupPostRequestBody;
}
/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns a completeSetupPostResponse
 */
export function createCompleteSetupPostResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoCompleteSetupPostResponse;
}
/**
 * The deserialization information for the current model
 * @returns a Record<string, (node: ParseNode) => void>
 */
export function deserializeIntoCompleteSetupPostRequestBody(completeSetupPostRequestBody: Partial<CompleteSetupPostRequestBody> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "backingStoreEnabled": n => { completeSetupPostRequestBody.backingStoreEnabled = true; },
        "tenantSetupInfo": n => { completeSetupPostRequestBody.tenantSetupInfo = n.getObjectValue<TenantSetupInfo>(createTenantSetupInfoFromDiscriminatorValue); },
    }
}
/**
 * The deserialization information for the current model
 * @returns a Record<string, (node: ParseNode) => void>
 */
export function deserializeIntoCompleteSetupPostResponse(completeSetupPostResponse: Partial<CompleteSetupPostResponse> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(completeSetupPostResponse),
        "value": n => { completeSetupPostResponse.value = n.getCollectionOfObjectValues<RoleSuccessStatistics>(createRoleSuccessStatisticsFromDiscriminatorValue); },
    }
}
/**
 * Serializes information the current object
 * @param writer Serialization writer to use to serialize this model
 */
export function serializeCompleteSetupPostRequestBody(writer: SerializationWriter, completeSetupPostRequestBody: Partial<CompleteSetupPostRequestBody> | undefined = {}) : void {
    writer.writeObjectValue<TenantSetupInfo>("tenantSetupInfo", completeSetupPostRequestBody.tenantSetupInfo, serializeTenantSetupInfo);
    writer.writeAdditionalData(completeSetupPostRequestBody.additionalData);
}
/**
 * Serializes information the current object
 * @param writer Serialization writer to use to serialize this model
 */
export function serializeCompleteSetupPostResponse(writer: SerializationWriter, completeSetupPostResponse: Partial<CompleteSetupPostResponse> | undefined = {}) : void {
    serializeBaseCollectionPaginationCountResponse(writer, completeSetupPostResponse)
    writer.writeCollectionOfObjectValues<RoleSuccessStatistics>("value", completeSetupPostResponse.value, serializeRoleSuccessStatistics);
}
/**
 * Metadata for all the requests in the request builder.
 */
export const CompleteSetupRequestBuilderRequestsMetadata: RequestsMetadata = {
    post: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createCompleteSetupPostResponseFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeCompleteSetupPostRequestBody,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/**
 * Uri template for the request builder.
 */
export const CompleteSetupRequestBuilderUriTemplate = "{+baseurl}/privilegedSignupStatus/completeSetup";
/* tslint:enable */
/* eslint-enable */
/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createServiceStatusFromDiscriminatorValue, serializeServiceStatus, type ServiceStatus } from '@microsoft/msgraph-beta-sdk/models/';
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/';
// @ts-ignore
import { type AdditionalDataHolder, type BackedModel, type BackingStore, type BaseRequestBuilder, type Parsable, type ParsableFactory, type ParseNode, type RequestConfiguration, type RequestInformation, type RequestsMetadata, type SerializationWriter } from '@microsoft/kiota-abstractions';

/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns {EnablePostRequestBody}
 */
export function createEnablePostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoEnablePostRequestBody;
}
/**
 * The deserialization information for the current model
 * @returns {Record<string, (node: ParseNode) => void>}
 */
export function deserializeIntoEnablePostRequestBody(enablePostRequestBody: Partial<EnablePostRequestBody> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "appOwnerTenantId": n => { enablePostRequestBody.appOwnerTenantId = n.getStringValue(); },
        "backingStoreEnabled": n => { enablePostRequestBody.backingStoreEnabled = true; },
    }
}
export interface EnablePostRequestBody extends AdditionalDataHolder, BackedModel, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The appOwnerTenantId property
     */
    appOwnerTenantId?: string;
    /**
     * Stores model information.
     */
    backingStoreEnabled?: boolean;
}
/**
 * Provides operations to call the enable method.
 */
export interface EnableRequestBuilder extends BaseRequestBuilder<EnableRequestBuilder> {
    /**
     * Enable the Microsoft 365 Backup Storage service for a tenant.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<ServiceStatus>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     * @see {@link https://learn.microsoft.com/graph/api/backuprestoreroot-enable?view=graph-rest-beta|Find more info here}
     */
     post(body: EnablePostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<ServiceStatus | undefined>;
    /**
     * Enable the Microsoft 365 Backup Storage service for a tenant.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPostRequestInformation(body: EnablePostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Serializes information the current object
 * @param writer Serialization writer to use to serialize this model
 */
export function serializeEnablePostRequestBody(writer: SerializationWriter, enablePostRequestBody: Partial<EnablePostRequestBody> | undefined = {}) : void {
    writer.writeStringValue("appOwnerTenantId", enablePostRequestBody.appOwnerTenantId);
    writer.writeAdditionalData(enablePostRequestBody.additionalData);
}
/**
 * Uri template for the request builder.
 */
export const EnableRequestBuilderUriTemplate = "{+baseurl}/solutions/backupRestore/enable";
/**
 * Metadata for all the requests in the request builder.
 */
export const EnableRequestBuilderRequestsMetadata: RequestsMetadata = {
    post: {
        uriTemplate: EnableRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createServiceStatusFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeEnablePostRequestBody,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */
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
 * @returns {HasActiveDeploymentsPostResponse}
 */
// @ts-ignore
export function createHasActiveDeploymentsPostResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoHasActiveDeploymentsPostResponse;
}
/**
 * The deserialization information for the current model
 * @param HasActiveDeploymentsPostResponse The instance to deserialize into.
 * @returns {Record<string, (node: ParseNode) => void>}
 */
// @ts-ignore
export function deserializeIntoHasActiveDeploymentsPostResponse(hasActiveDeploymentsPostResponse: Partial<HasActiveDeploymentsPostResponse> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "backingStoreEnabled": n => { hasActiveDeploymentsPostResponse.backingStoreEnabled = true; },
        "value": n => { hasActiveDeploymentsPostResponse.value = n.getBooleanValue(); },
    }
}
export interface HasActiveDeploymentsPostResponse extends AdditionalDataHolder, BackedModel, Parsable {
    /**
     * Stores model information.
     */
    backingStoreEnabled?: boolean | null;
    /**
     * The value property
     */
    value?: boolean | null;
}
/**
 * Provides operations to call the hasActiveDeployments method.
 */
export interface HasActiveDeploymentsRequestBuilder extends BaseRequestBuilder<HasActiveDeploymentsRequestBuilder> {
    /**
     * Invoke action hasActiveDeployments
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<HasActiveDeploymentsPostResponse>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     post(requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<HasActiveDeploymentsPostResponse | undefined>;
    /**
     * Invoke action hasActiveDeployments
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPostRequestInformation(requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Serializes information the current object
 * @param HasActiveDeploymentsPostResponse The instance to serialize from.
 * @param isSerializingDerivedType A boolean indicating whether the serialization is for a derived type.
 * @param writer Serialization writer to use to serialize this model
 */
// @ts-ignore
export function serializeHasActiveDeploymentsPostResponse(writer: SerializationWriter, hasActiveDeploymentsPostResponse: Partial<HasActiveDeploymentsPostResponse> | undefined | null = {}, isSerializingDerivedType: boolean = false) : void {
    if (!hasActiveDeploymentsPostResponse || isSerializingDerivedType) { return; }
    writer.writeBooleanValue("value", hasActiveDeploymentsPostResponse.value);
    writer.writeAdditionalData(hasActiveDeploymentsPostResponse.additionalData);
}
/**
 * Uri template for the request builder.
 */
export const HasActiveDeploymentsRequestBuilderUriTemplate = "{+baseurl}/deviceManagement/zebraFotaConnector/hasActiveDeployments";
/**
 * Metadata for all the requests in the request builder.
 */
export const HasActiveDeploymentsRequestBuilderRequestsMetadata: RequestsMetadata = {
    post: {
        uriTemplate: HasActiveDeploymentsRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createHasActiveDeploymentsPostResponseFromDiscriminatorValue,
    },
};
/* tslint:enable */
/* eslint-enable */

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
 * @returns {IsManagedAppUserBlockedGetResponse}
 */
// @ts-ignore
export function createIsManagedAppUserBlockedGetResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoIsManagedAppUserBlockedGetResponse;
}
/**
 * The deserialization information for the current model
 * @param IsManagedAppUserBlockedGetResponse The instance to deserialize into.
 * @returns {Record<string, (node: ParseNode) => void>}
 */
// @ts-ignore
export function deserializeIntoIsManagedAppUserBlockedGetResponse(isManagedAppUserBlockedGetResponse: Partial<IsManagedAppUserBlockedGetResponse> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "backingStoreEnabled": n => { isManagedAppUserBlockedGetResponse.backingStoreEnabled = true; },
        "value": n => { isManagedAppUserBlockedGetResponse.value = n.getBooleanValue(); },
    }
}
export interface IsManagedAppUserBlockedGetResponse extends AdditionalDataHolder, BackedModel, Parsable {
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
 * Provides operations to call the isManagedAppUserBlocked method.
 */
export interface IsManagedAppUserBlockedRequestBuilder extends BaseRequestBuilder<IsManagedAppUserBlockedRequestBuilder> {
    /**
     * Gets the blocked state of a managed app user.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<IsManagedAppUserBlockedGetResponse>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     get(requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<IsManagedAppUserBlockedGetResponse | undefined>;
    /**
     * Gets the blocked state of a managed app user.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Serializes information the current object
 * @param IsManagedAppUserBlockedGetResponse The instance to serialize from.
 * @param isSerializingDerivedType A boolean indicating whether the serialization is for a derived type.
 * @param writer Serialization writer to use to serialize this model
 */
// @ts-ignore
export function serializeIsManagedAppUserBlockedGetResponse(writer: SerializationWriter, isManagedAppUserBlockedGetResponse: Partial<IsManagedAppUserBlockedGetResponse> | undefined | null = {}, isSerializingDerivedType: boolean = false) : void {
    if (!isManagedAppUserBlockedGetResponse || isSerializingDerivedType) { return; }
    writer.writeBooleanValue("value", isManagedAppUserBlockedGetResponse.value);
    writer.writeAdditionalData(isManagedAppUserBlockedGetResponse.additionalData);
}
/**
 * Uri template for the request builder.
 */
export const IsManagedAppUserBlockedRequestBuilderUriTemplate = "{+baseurl}/users/{user%2Did}/isManagedAppUserBlocked()";
/**
 * Metadata for all the requests in the request builder.
 */
export const IsManagedAppUserBlockedRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        uriTemplate: IsManagedAppUserBlockedRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createIsManagedAppUserBlockedGetResponseFromDiscriminatorValue,
    },
};
/* tslint:enable */
/* eslint-enable */

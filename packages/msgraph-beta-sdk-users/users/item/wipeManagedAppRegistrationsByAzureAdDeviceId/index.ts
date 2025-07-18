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
 * @returns {WipeManagedAppRegistrationsByAzureAdDeviceIdPostRequestBody}
 */
// @ts-ignore
export function createWipeManagedAppRegistrationsByAzureAdDeviceIdPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoWipeManagedAppRegistrationsByAzureAdDeviceIdPostRequestBody;
}
/**
 * The deserialization information for the current model
 * @param WipeManagedAppRegistrationsByAzureAdDeviceIdPostRequestBody The instance to deserialize into.
 * @returns {Record<string, (node: ParseNode) => void>}
 */
// @ts-ignore
export function deserializeIntoWipeManagedAppRegistrationsByAzureAdDeviceIdPostRequestBody(wipeManagedAppRegistrationsByAzureAdDeviceIdPostRequestBody: Partial<WipeManagedAppRegistrationsByAzureAdDeviceIdPostRequestBody> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "azureAdDeviceId": n => { wipeManagedAppRegistrationsByAzureAdDeviceIdPostRequestBody.azureAdDeviceId = n.getStringValue(); },
        "backingStoreEnabled": n => { wipeManagedAppRegistrationsByAzureAdDeviceIdPostRequestBody.backingStoreEnabled = true; },
    }
}
/**
 * Serializes information the current object
 * @param isSerializingDerivedType A boolean indicating whether the serialization is for a derived type.
 * @param WipeManagedAppRegistrationsByAzureAdDeviceIdPostRequestBody The instance to serialize from.
 * @param writer Serialization writer to use to serialize this model
 */
// @ts-ignore
export function serializeWipeManagedAppRegistrationsByAzureAdDeviceIdPostRequestBody(writer: SerializationWriter, wipeManagedAppRegistrationsByAzureAdDeviceIdPostRequestBody: Partial<WipeManagedAppRegistrationsByAzureAdDeviceIdPostRequestBody> | undefined | null = {}, isSerializingDerivedType: boolean = false) : void {
    if (!wipeManagedAppRegistrationsByAzureAdDeviceIdPostRequestBody || isSerializingDerivedType) { return; }
    writer.writeStringValue("azureAdDeviceId", wipeManagedAppRegistrationsByAzureAdDeviceIdPostRequestBody.azureAdDeviceId);
    writer.writeAdditionalData(wipeManagedAppRegistrationsByAzureAdDeviceIdPostRequestBody.additionalData);
}
export interface WipeManagedAppRegistrationsByAzureAdDeviceIdPostRequestBody extends AdditionalDataHolder, BackedModel, Parsable {
    /**
     * The azureAdDeviceId property
     */
    azureAdDeviceId?: string | null;
    /**
     * Stores model information.
     */
    backingStoreEnabled?: boolean | null;
}
/**
 * Provides operations to call the wipeManagedAppRegistrationsByAzureAdDeviceId method.
 */
export interface WipeManagedAppRegistrationsByAzureAdDeviceIdRequestBuilder extends BaseRequestBuilder<WipeManagedAppRegistrationsByAzureAdDeviceIdRequestBuilder> {
    /**
     * Issues a wipe operation on an app registration with specified aad device Id.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     post(body: WipeManagedAppRegistrationsByAzureAdDeviceIdPostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<void>;
    /**
     * Issues a wipe operation on an app registration with specified aad device Id.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPostRequestInformation(body: WipeManagedAppRegistrationsByAzureAdDeviceIdPostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Uri template for the request builder.
 */
export const WipeManagedAppRegistrationsByAzureAdDeviceIdRequestBuilderUriTemplate = "{+baseurl}/users/{user%2Did}/wipeManagedAppRegistrationsByAzureAdDeviceId";
/**
 * Metadata for all the requests in the request builder.
 */
export const WipeManagedAppRegistrationsByAzureAdDeviceIdRequestBuilderRequestsMetadata: RequestsMetadata = {
    post: {
        uriTemplate: WipeManagedAppRegistrationsByAzureAdDeviceIdRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendNoResponseContent",
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeWipeManagedAppRegistrationsByAzureAdDeviceIdPostRequestBody,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */

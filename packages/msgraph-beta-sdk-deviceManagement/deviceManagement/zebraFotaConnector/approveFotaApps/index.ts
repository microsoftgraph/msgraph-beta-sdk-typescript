/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/';
import { type AdditionalDataHolder, type BackedModel, type BackingStore, type BaseRequestBuilder, type Parsable, type ParsableFactory, type ParseNode, type RequestConfiguration, type RequestInformation, type RequestsMetadata, type SerializationWriter } from '@microsoft/kiota-abstractions';

export interface ApproveFotaAppsPostResponse extends AdditionalDataHolder, BackedModel, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * Stores model information.
     */
    backingStoreEnabled?: boolean;
    /**
     * The value property
     */
    value?: boolean;
}
/**
 * Provides operations to call the approveFotaApps method.
 */
export interface ApproveFotaAppsRequestBuilder extends BaseRequestBuilder<ApproveFotaAppsRequestBuilder> {
    /**
     * Invoke action approveFotaApps
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of ApproveFotaAppsPostResponse
     */
     post(requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<ApproveFotaAppsPostResponse | undefined>;
    /**
     * Invoke action approveFotaApps
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toPostRequestInformation(requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns a approveFotaAppsPostResponse
 */
export function createApproveFotaAppsPostResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoApproveFotaAppsPostResponse;
}
/**
 * The deserialization information for the current model
 * @returns a Record<string, (node: ParseNode) => void>
 */
export function deserializeIntoApproveFotaAppsPostResponse(approveFotaAppsPostResponse: Partial<ApproveFotaAppsPostResponse> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "backingStoreEnabled": n => { approveFotaAppsPostResponse.backingStoreEnabled = true; },
        "value": n => { approveFotaAppsPostResponse.value = n.getBooleanValue(); },
    }
}
/**
 * Serializes information the current object
 * @param writer Serialization writer to use to serialize this model
 */
export function serializeApproveFotaAppsPostResponse(writer: SerializationWriter, approveFotaAppsPostResponse: Partial<ApproveFotaAppsPostResponse> | undefined = {}) : void {
    writer.writeBooleanValue("value", approveFotaAppsPostResponse.value);
    writer.writeAdditionalData(approveFotaAppsPostResponse.additionalData);
}
/**
 * Metadata for all the requests in the request builder.
 */
export const ApproveFotaAppsRequestBuilderRequestsMetadata: RequestsMetadata = {
    post: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createApproveFotaAppsPostResponseFromDiscriminatorValue,
    },
};
/**
 * Uri template for the request builder.
 */
export const ApproveFotaAppsRequestBuilderUriTemplate = "{+baseurl}/deviceManagement/zebraFotaConnector/approveFotaApps";
/* tslint:enable */
/* eslint-enable */
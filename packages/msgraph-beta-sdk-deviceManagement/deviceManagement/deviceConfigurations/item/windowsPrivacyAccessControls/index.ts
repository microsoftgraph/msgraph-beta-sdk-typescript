/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
import { createWindowsPrivacyDataAccessControlItemFromDiscriminatorValue, serializeWindowsPrivacyDataAccessControlItem, type WindowsPrivacyDataAccessControlItem } from '@microsoft/msgraph-beta-sdk/models/';
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/';
import { type AdditionalDataHolder, type BackedModel, type BackingStore, type BaseRequestBuilder, type Parsable, type ParsableFactory, type ParseNode, type RequestConfiguration, type RequestInformation, type RequestsMetadata, type SerializationWriter } from '@microsoft/kiota-abstractions';

/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns a windowsPrivacyAccessControlsPostRequestBody
 */
export function createWindowsPrivacyAccessControlsPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoWindowsPrivacyAccessControlsPostRequestBody;
}
/**
 * The deserialization information for the current model
 * @returns a Record<string, (node: ParseNode) => void>
 */
export function deserializeIntoWindowsPrivacyAccessControlsPostRequestBody(windowsPrivacyAccessControlsPostRequestBody: Partial<WindowsPrivacyAccessControlsPostRequestBody> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "backingStoreEnabled": n => { windowsPrivacyAccessControlsPostRequestBody.backingStoreEnabled = true; },
        "windowsPrivacyAccessControls": n => { windowsPrivacyAccessControlsPostRequestBody.windowsPrivacyAccessControls = n.getCollectionOfObjectValues<WindowsPrivacyDataAccessControlItem>(createWindowsPrivacyDataAccessControlItemFromDiscriminatorValue); },
    }
}
/**
 * Serializes information the current object
 * @param writer Serialization writer to use to serialize this model
 */
export function serializeWindowsPrivacyAccessControlsPostRequestBody(writer: SerializationWriter, windowsPrivacyAccessControlsPostRequestBody: Partial<WindowsPrivacyAccessControlsPostRequestBody> | undefined = {}) : void {
    writer.writeCollectionOfObjectValues<WindowsPrivacyDataAccessControlItem>("windowsPrivacyAccessControls", windowsPrivacyAccessControlsPostRequestBody.windowsPrivacyAccessControls, serializeWindowsPrivacyDataAccessControlItem);
    writer.writeAdditionalData(windowsPrivacyAccessControlsPostRequestBody.additionalData);
}
export interface WindowsPrivacyAccessControlsPostRequestBody extends AdditionalDataHolder, BackedModel, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * Stores model information.
     */
    backingStoreEnabled?: boolean;
    /**
     * The windowsPrivacyAccessControls property
     */
    windowsPrivacyAccessControls?: WindowsPrivacyDataAccessControlItem[];
}
/**
 * Provides operations to call the windowsPrivacyAccessControls method.
 */
export interface WindowsPrivacyAccessControlsRequestBuilder extends BaseRequestBuilder<WindowsPrivacyAccessControlsRequestBuilder> {
    /**
     * Invoke action windowsPrivacyAccessControls
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     */
     post(body: WindowsPrivacyAccessControlsPostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<void>;
    /**
     * Invoke action windowsPrivacyAccessControls
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toPostRequestInformation(body: WindowsPrivacyAccessControlsPostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Metadata for all the requests in the request builder.
 */
export const WindowsPrivacyAccessControlsRequestBuilderRequestsMetadata: RequestsMetadata = {
    post: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendNoResponseContentAsync",
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeWindowsPrivacyAccessControlsPostRequestBody,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/**
 * Uri template for the request builder.
 */
export const WindowsPrivacyAccessControlsRequestBuilderUriTemplate = "{+baseurl}/deviceManagement/deviceConfigurations/{deviceConfiguration%2Did}/windowsPrivacyAccessControls";
/* tslint:enable */
/* eslint-enable */
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
 * @returns {ImageWithWidthGetResponse}
 */
// @ts-ignore
export function createImageWithWidthGetResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoImageWithWidthGetResponse;
}
/**
 * The deserialization information for the current model
 * @param ImageWithWidthGetResponse The instance to deserialize into.
 * @returns {Record<string, (node: ParseNode) => void>}
 */
// @ts-ignore
export function deserializeIntoImageWithWidthGetResponse(imageWithWidthGetResponse: Partial<ImageWithWidthGetResponse> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "backingStoreEnabled": n => { imageWithWidthGetResponse.backingStoreEnabled = true; },
        "value": n => { imageWithWidthGetResponse.value = n.getStringValue(); },
    }
}
export interface ImageWithWidthGetResponse extends AdditionalDataHolder, BackedModel, Parsable {
    /**
     * Stores model information.
     */
    backingStoreEnabled?: boolean | null;
    /**
     * The value property
     */
    value?: string | null;
}
/**
 * Provides operations to call the image method.
 */
export interface ImageWithWidthRequestBuilder extends BaseRequestBuilder<ImageWithWidthRequestBuilder> {
    /**
     * Invoke function image
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<ImageWithWidthGetResponse>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     get(requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<ImageWithWidthGetResponse | undefined>;
    /**
     * Invoke function image
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Serializes information the current object
 * @param ImageWithWidthGetResponse The instance to serialize from.
 * @param isSerializingDerivedType A boolean indicating whether the serialization is for a derived type.
 * @param writer Serialization writer to use to serialize this model
 */
// @ts-ignore
export function serializeImageWithWidthGetResponse(writer: SerializationWriter, imageWithWidthGetResponse: Partial<ImageWithWidthGetResponse> | undefined | null = {}, isSerializingDerivedType: boolean = false) : void {
    if (!imageWithWidthGetResponse || isSerializingDerivedType) { return; }
    writer.writeStringValue("value", imageWithWidthGetResponse.value);
    writer.writeAdditionalData(imageWithWidthGetResponse.additionalData);
}
/**
 * Uri template for the request builder.
 */
export const ImageWithWidthRequestBuilderUriTemplate = "{+baseurl}/drives/{drive%2Did}/items/{driveItem%2Did}/workbook/worksheets/{workbookWorksheet%2Did}/charts/{workbookChart%2Did}/image(width={width})";
/**
 * Metadata for all the requests in the request builder.
 */
export const ImageWithWidthRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        uriTemplate: ImageWithWidthRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createImageWithWidthGetResponseFromDiscriminatorValue,
    },
};
/* tslint:enable */
/* eslint-enable */

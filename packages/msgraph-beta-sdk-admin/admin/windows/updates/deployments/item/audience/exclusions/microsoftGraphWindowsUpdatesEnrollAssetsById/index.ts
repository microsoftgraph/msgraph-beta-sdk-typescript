/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/';
import { UpdateCategory, UpdateCategoryObject } from '@microsoft/msgraph-beta-sdk/models/windowsUpdates/';
import { type AdditionalDataHolder, type BackedModel, type BackingStore, type BaseRequestBuilder, type Parsable, type ParsableFactory, type ParseNode, type RequestConfiguration, type RequestInformation, type RequestsMetadata, type SerializationWriter } from '@microsoft/kiota-abstractions';

/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns a enrollAssetsByIdPostRequestBody
 */
export function createEnrollAssetsByIdPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoEnrollAssetsByIdPostRequestBody;
}
/**
 * The deserialization information for the current model
 * @returns a Record<string, (node: ParseNode) => void>
 */
export function deserializeIntoEnrollAssetsByIdPostRequestBody(enrollAssetsByIdPostRequestBody: Partial<EnrollAssetsByIdPostRequestBody> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "backingStoreEnabled": n => { enrollAssetsByIdPostRequestBody.backingStoreEnabled = true; },
        "ids": n => { enrollAssetsByIdPostRequestBody.ids = n.getCollectionOfPrimitiveValues<string>(); },
        "memberEntityType": n => { enrollAssetsByIdPostRequestBody.memberEntityType = n.getStringValue(); },
        "updateCategory": n => { enrollAssetsByIdPostRequestBody.updateCategory = n.getEnumValue<UpdateCategory>(UpdateCategoryObject); },
    }
}
export interface EnrollAssetsByIdPostRequestBody extends AdditionalDataHolder, BackedModel, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * Stores model information.
     */
    backingStoreEnabled?: boolean;
    /**
     * The ids property
     */
    ids?: string[];
    /**
     * The memberEntityType property
     */
    memberEntityType?: string;
    /**
     * The updateCategory property
     */
    updateCategory?: UpdateCategory;
}
/**
 * Provides operations to call the enrollAssetsById method.
 */
export interface MicrosoftGraphWindowsUpdatesEnrollAssetsByIdRequestBuilder extends BaseRequestBuilder<MicrosoftGraphWindowsUpdatesEnrollAssetsByIdRequestBuilder> {
    /**
     * Invoke action enrollAssetsById
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     */
     post(body: EnrollAssetsByIdPostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<void>;
    /**
     * Invoke action enrollAssetsById
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toPostRequestInformation(body: EnrollAssetsByIdPostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Serializes information the current object
 * @param writer Serialization writer to use to serialize this model
 */
export function serializeEnrollAssetsByIdPostRequestBody(writer: SerializationWriter, enrollAssetsByIdPostRequestBody: Partial<EnrollAssetsByIdPostRequestBody> | undefined = {}) : void {
    writer.writeCollectionOfPrimitiveValues<string>("ids", enrollAssetsByIdPostRequestBody.ids);
    writer.writeStringValue("memberEntityType", enrollAssetsByIdPostRequestBody.memberEntityType);
    writer.writeEnumValue<UpdateCategory>("updateCategory", enrollAssetsByIdPostRequestBody.updateCategory);
    writer.writeAdditionalData(enrollAssetsByIdPostRequestBody.additionalData);
}
/**
 * Metadata for all the requests in the request builder.
 */
export const MicrosoftGraphWindowsUpdatesEnrollAssetsByIdRequestBuilderRequestsMetadata: RequestsMetadata = {
    post: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendNoResponseContentAsync",
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeEnrollAssetsByIdPostRequestBody,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/**
 * Uri template for the request builder.
 */
export const MicrosoftGraphWindowsUpdatesEnrollAssetsByIdRequestBuilderUriTemplate = "{+baseurl}/admin/windows/updates/deployments/{deployment%2Did}/audience/exclusions/microsoft.graph.windowsUpdates.enrollAssetsById";
/* tslint:enable */
/* eslint-enable */
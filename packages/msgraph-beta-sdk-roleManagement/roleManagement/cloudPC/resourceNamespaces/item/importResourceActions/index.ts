/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
import { createUnifiedRbacResourceNamespaceFromDiscriminatorValue, serializeUnifiedRbacResourceNamespace, type UnifiedRbacResourceNamespace } from '@microsoft/msgraph-beta-sdk/models/';
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/';
import { type AdditionalDataHolder, type BackedModel, type BackingStore, type BaseRequestBuilder, type Parsable, type ParsableFactory, type ParseNode, type RequestConfiguration, type RequestInformation, type RequestsMetadata, type SerializationWriter } from '@microsoft/kiota-abstractions';

/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns a importResourceActionsPostRequestBody
 */
export function createImportResourceActionsPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoImportResourceActionsPostRequestBody;
}
/**
 * The deserialization information for the current model
 * @returns a Record<string, (node: ParseNode) => void>
 */
export function deserializeIntoImportResourceActionsPostRequestBody(importResourceActionsPostRequestBody: Partial<ImportResourceActionsPostRequestBody> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "backingStoreEnabled": n => { importResourceActionsPostRequestBody.backingStoreEnabled = true; },
        "format": n => { importResourceActionsPostRequestBody.format = n.getStringValue(); },
        "overwriteResourceNamespace": n => { importResourceActionsPostRequestBody.overwriteResourceNamespace = n.getBooleanValue(); },
        "value": n => { importResourceActionsPostRequestBody.value = n.getStringValue(); },
    }
}
export interface ImportResourceActionsPostRequestBody extends AdditionalDataHolder, BackedModel, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * Stores model information.
     */
    backingStoreEnabled?: boolean;
    /**
     * The format property
     */
    format?: string;
    /**
     * The overwriteResourceNamespace property
     */
    overwriteResourceNamespace?: boolean;
    /**
     * The value property
     */
    value?: string;
}
/**
 * Provides operations to call the importResourceActions method.
 */
export interface ImportResourceActionsRequestBuilder extends BaseRequestBuilder<ImportResourceActionsRequestBuilder> {
    /**
     * Invoke action importResourceActions
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of UnifiedRbacResourceNamespace
     */
     post(body: ImportResourceActionsPostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<UnifiedRbacResourceNamespace | undefined>;
    /**
     * Invoke action importResourceActions
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toPostRequestInformation(body: ImportResourceActionsPostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Serializes information the current object
 * @param writer Serialization writer to use to serialize this model
 */
export function serializeImportResourceActionsPostRequestBody(writer: SerializationWriter, importResourceActionsPostRequestBody: Partial<ImportResourceActionsPostRequestBody> | undefined = {}) : void {
    writer.writeStringValue("format", importResourceActionsPostRequestBody.format);
    writer.writeBooleanValue("overwriteResourceNamespace", importResourceActionsPostRequestBody.overwriteResourceNamespace);
    writer.writeStringValue("value", importResourceActionsPostRequestBody.value);
    writer.writeAdditionalData(importResourceActionsPostRequestBody.additionalData);
}
/**
 * Metadata for all the requests in the request builder.
 */
export const ImportResourceActionsRequestBuilderRequestsMetadata: RequestsMetadata = {
    post: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createUnifiedRbacResourceNamespaceFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeImportResourceActionsPostRequestBody,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/**
 * Uri template for the request builder.
 */
export const ImportResourceActionsRequestBuilderUriTemplate = "{+baseurl}/roleManagement/cloudPC/resourceNamespaces/{unifiedRbacResourceNamespace%2Did}/importResourceActions";
/* tslint:enable */
/* eslint-enable */
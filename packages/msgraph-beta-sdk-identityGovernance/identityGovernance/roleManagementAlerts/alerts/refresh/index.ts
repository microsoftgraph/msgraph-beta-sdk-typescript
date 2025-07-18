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
 * @returns {RefreshPostRequestBody}
 */
// @ts-ignore
export function createRefreshPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoRefreshPostRequestBody;
}
/**
 * The deserialization information for the current model
 * @param RefreshPostRequestBody The instance to deserialize into.
 * @returns {Record<string, (node: ParseNode) => void>}
 */
// @ts-ignore
export function deserializeIntoRefreshPostRequestBody(refreshPostRequestBody: Partial<RefreshPostRequestBody> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "backingStoreEnabled": n => { refreshPostRequestBody.backingStoreEnabled = true; },
        "scopeId": n => { refreshPostRequestBody.scopeId = n.getStringValue(); },
        "scopeType": n => { refreshPostRequestBody.scopeType = n.getStringValue(); },
    }
}
export interface RefreshPostRequestBody extends AdditionalDataHolder, BackedModel, Parsable {
    /**
     * Stores model information.
     */
    backingStoreEnabled?: boolean | null;
    /**
     * The scopeId property
     */
    scopeId?: string | null;
    /**
     * The scopeType property
     */
    scopeType?: string | null;
}
/**
 * Provides operations to call the refresh method.
 */
export interface RefreshRequestBuilder extends BaseRequestBuilder<RefreshRequestBuilder> {
    /**
     * Refresh incidents on all security alerts or on a single security alert in Privileged Identity Management (PIM) for Microsoft Entra roles. This task is a long-running operation and the unifiedRoleManagementAlert object will be updated only when the operation completes.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     * @see {@link https://learn.microsoft.com/graph/api/unifiedrolemanagementalert-refresh?view=graph-rest-beta|Find more info here}
     */
     post(body: RefreshPostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<void>;
    /**
     * Refresh incidents on all security alerts or on a single security alert in Privileged Identity Management (PIM) for Microsoft Entra roles. This task is a long-running operation and the unifiedRoleManagementAlert object will be updated only when the operation completes.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPostRequestInformation(body: RefreshPostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Serializes information the current object
 * @param isSerializingDerivedType A boolean indicating whether the serialization is for a derived type.
 * @param RefreshPostRequestBody The instance to serialize from.
 * @param writer Serialization writer to use to serialize this model
 */
// @ts-ignore
export function serializeRefreshPostRequestBody(writer: SerializationWriter, refreshPostRequestBody: Partial<RefreshPostRequestBody> | undefined | null = {}, isSerializingDerivedType: boolean = false) : void {
    if (!refreshPostRequestBody || isSerializingDerivedType) { return; }
    writer.writeStringValue("scopeId", refreshPostRequestBody.scopeId);
    writer.writeStringValue("scopeType", refreshPostRequestBody.scopeType);
    writer.writeAdditionalData(refreshPostRequestBody.additionalData);
}
/**
 * Uri template for the request builder.
 */
export const RefreshRequestBuilderUriTemplate = "{+baseurl}/identityGovernance/roleManagementAlerts/alerts/refresh";
/**
 * Metadata for all the requests in the request builder.
 */
export const RefreshRequestBuilderRequestsMetadata: RequestsMetadata = {
    post: {
        uriTemplate: RefreshRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendNoResponseContent",
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeRefreshPostRequestBody,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */

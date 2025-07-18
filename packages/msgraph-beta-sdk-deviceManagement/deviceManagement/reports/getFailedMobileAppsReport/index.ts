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
 * @returns {GetFailedMobileAppsReportPostRequestBody}
 */
// @ts-ignore
export function createGetFailedMobileAppsReportPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoGetFailedMobileAppsReportPostRequestBody;
}
/**
 * The deserialization information for the current model
 * @param GetFailedMobileAppsReportPostRequestBody The instance to deserialize into.
 * @returns {Record<string, (node: ParseNode) => void>}
 */
// @ts-ignore
export function deserializeIntoGetFailedMobileAppsReportPostRequestBody(getFailedMobileAppsReportPostRequestBody: Partial<GetFailedMobileAppsReportPostRequestBody> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "backingStoreEnabled": n => { getFailedMobileAppsReportPostRequestBody.backingStoreEnabled = true; },
        "filter": n => { getFailedMobileAppsReportPostRequestBody.filter = n.getStringValue(); },
        "groupBy": n => { getFailedMobileAppsReportPostRequestBody.groupBy = n.getCollectionOfPrimitiveValues<string>(); },
        "name": n => { getFailedMobileAppsReportPostRequestBody.name = n.getStringValue(); },
        "orderBy": n => { getFailedMobileAppsReportPostRequestBody.orderBy = n.getCollectionOfPrimitiveValues<string>(); },
        "search": n => { getFailedMobileAppsReportPostRequestBody.search = n.getStringValue(); },
        "select": n => { getFailedMobileAppsReportPostRequestBody.select = n.getCollectionOfPrimitiveValues<string>(); },
        "sessionId": n => { getFailedMobileAppsReportPostRequestBody.sessionId = n.getStringValue(); },
        "skip": n => { getFailedMobileAppsReportPostRequestBody.skip = n.getNumberValue(); },
        "top": n => { getFailedMobileAppsReportPostRequestBody.top = n.getNumberValue(); },
    }
}
export interface GetFailedMobileAppsReportPostRequestBody extends AdditionalDataHolder, BackedModel, Parsable {
    /**
     * Stores model information.
     */
    backingStoreEnabled?: boolean | null;
    /**
     * The filter property
     */
    filter?: string | null;
    /**
     * The groupBy property
     */
    groupBy?: string[] | null;
    /**
     * The name property
     */
    name?: string | null;
    /**
     * The orderBy property
     */
    orderBy?: string[] | null;
    /**
     * The search property
     */
    search?: string | null;
    /**
     * The select property
     */
    select?: string[] | null;
    /**
     * The sessionId property
     */
    sessionId?: string | null;
    /**
     * The skip property
     */
    skip?: number | null;
    /**
     * The top property
     */
    top?: number | null;
}
/**
 * Provides operations to call the getFailedMobileAppsReport method.
 */
export interface GetFailedMobileAppsReportRequestBuilder extends BaseRequestBuilder<GetFailedMobileAppsReportRequestBuilder> {
    /**
     * Invoke action getFailedMobileAppsReport
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<ArrayBuffer>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     post(body: GetFailedMobileAppsReportPostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<ArrayBuffer | undefined>;
    /**
     * Invoke action getFailedMobileAppsReport
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPostRequestInformation(body: GetFailedMobileAppsReportPostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Serializes information the current object
 * @param GetFailedMobileAppsReportPostRequestBody The instance to serialize from.
 * @param isSerializingDerivedType A boolean indicating whether the serialization is for a derived type.
 * @param writer Serialization writer to use to serialize this model
 */
// @ts-ignore
export function serializeGetFailedMobileAppsReportPostRequestBody(writer: SerializationWriter, getFailedMobileAppsReportPostRequestBody: Partial<GetFailedMobileAppsReportPostRequestBody> | undefined | null = {}, isSerializingDerivedType: boolean = false) : void {
    if (!getFailedMobileAppsReportPostRequestBody || isSerializingDerivedType) { return; }
    writer.writeStringValue("filter", getFailedMobileAppsReportPostRequestBody.filter);
    writer.writeCollectionOfPrimitiveValues<string>("groupBy", getFailedMobileAppsReportPostRequestBody.groupBy);
    writer.writeStringValue("name", getFailedMobileAppsReportPostRequestBody.name);
    writer.writeCollectionOfPrimitiveValues<string>("orderBy", getFailedMobileAppsReportPostRequestBody.orderBy);
    writer.writeStringValue("search", getFailedMobileAppsReportPostRequestBody.search);
    writer.writeCollectionOfPrimitiveValues<string>("select", getFailedMobileAppsReportPostRequestBody.select);
    writer.writeStringValue("sessionId", getFailedMobileAppsReportPostRequestBody.sessionId);
    writer.writeNumberValue("skip", getFailedMobileAppsReportPostRequestBody.skip);
    writer.writeNumberValue("top", getFailedMobileAppsReportPostRequestBody.top);
    writer.writeAdditionalData(getFailedMobileAppsReportPostRequestBody.additionalData);
}
/**
 * Uri template for the request builder.
 */
export const GetFailedMobileAppsReportRequestBuilderUriTemplate = "{+baseurl}/deviceManagement/reports/getFailedMobileAppsReport";
/**
 * Metadata for all the requests in the request builder.
 */
export const GetFailedMobileAppsReportRequestBuilderRequestsMetadata: RequestsMetadata = {
    post: {
        uriTemplate: GetFailedMobileAppsReportRequestBuilderUriTemplate,
        responseBodyContentType: "application/octet-stream, application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendPrimitive",
        responseBodyFactory:  "ArrayBuffer",
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeGetFailedMobileAppsReportPostRequestBody,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */

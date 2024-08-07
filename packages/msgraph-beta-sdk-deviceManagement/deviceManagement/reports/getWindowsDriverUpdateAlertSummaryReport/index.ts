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
 * @returns {GetWindowsDriverUpdateAlertSummaryReportPostRequestBody}
 */
export function createGetWindowsDriverUpdateAlertSummaryReportPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoGetWindowsDriverUpdateAlertSummaryReportPostRequestBody;
}
/**
 * The deserialization information for the current model
 * @returns {Record<string, (node: ParseNode) => void>}
 */
export function deserializeIntoGetWindowsDriverUpdateAlertSummaryReportPostRequestBody(getWindowsDriverUpdateAlertSummaryReportPostRequestBody: Partial<GetWindowsDriverUpdateAlertSummaryReportPostRequestBody> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "backingStoreEnabled": n => { getWindowsDriverUpdateAlertSummaryReportPostRequestBody.backingStoreEnabled = true; },
        "filter": n => { getWindowsDriverUpdateAlertSummaryReportPostRequestBody.filter = n.getStringValue(); },
        "groupBy": n => { getWindowsDriverUpdateAlertSummaryReportPostRequestBody.groupBy = n.getCollectionOfPrimitiveValues<string>(); },
        "name": n => { getWindowsDriverUpdateAlertSummaryReportPostRequestBody.name = n.getStringValue(); },
        "orderBy": n => { getWindowsDriverUpdateAlertSummaryReportPostRequestBody.orderBy = n.getCollectionOfPrimitiveValues<string>(); },
        "search": n => { getWindowsDriverUpdateAlertSummaryReportPostRequestBody.search = n.getStringValue(); },
        "select": n => { getWindowsDriverUpdateAlertSummaryReportPostRequestBody.select = n.getCollectionOfPrimitiveValues<string>(); },
        "sessionId": n => { getWindowsDriverUpdateAlertSummaryReportPostRequestBody.sessionId = n.getStringValue(); },
        "skip": n => { getWindowsDriverUpdateAlertSummaryReportPostRequestBody.skip = n.getNumberValue(); },
        "top": n => { getWindowsDriverUpdateAlertSummaryReportPostRequestBody.top = n.getNumberValue(); },
    }
}
export interface GetWindowsDriverUpdateAlertSummaryReportPostRequestBody extends AdditionalDataHolder, BackedModel, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * Stores model information.
     */
    backingStoreEnabled?: boolean;
    /**
     * The filter property
     */
    filter?: string;
    /**
     * The groupBy property
     */
    groupBy?: string[];
    /**
     * The name property
     */
    name?: string;
    /**
     * The orderBy property
     */
    orderBy?: string[];
    /**
     * The search property
     */
    search?: string;
    /**
     * The select property
     */
    select?: string[];
    /**
     * The sessionId property
     */
    sessionId?: string;
    /**
     * The skip property
     */
    skip?: number;
    /**
     * The top property
     */
    top?: number;
}
/**
 * Provides operations to call the getWindowsDriverUpdateAlertSummaryReport method.
 */
export interface GetWindowsDriverUpdateAlertSummaryReportRequestBuilder extends BaseRequestBuilder<GetWindowsDriverUpdateAlertSummaryReportRequestBuilder> {
    /**
     * Invoke action getWindowsDriverUpdateAlertSummaryReport
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<ArrayBuffer>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     post(body: GetWindowsDriverUpdateAlertSummaryReportPostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<ArrayBuffer | undefined>;
    /**
     * Invoke action getWindowsDriverUpdateAlertSummaryReport
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPostRequestInformation(body: GetWindowsDriverUpdateAlertSummaryReportPostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Serializes information the current object
 * @param writer Serialization writer to use to serialize this model
 */
export function serializeGetWindowsDriverUpdateAlertSummaryReportPostRequestBody(writer: SerializationWriter, getWindowsDriverUpdateAlertSummaryReportPostRequestBody: Partial<GetWindowsDriverUpdateAlertSummaryReportPostRequestBody> | undefined = {}) : void {
    writer.writeStringValue("filter", getWindowsDriverUpdateAlertSummaryReportPostRequestBody.filter);
    writer.writeCollectionOfPrimitiveValues<string>("groupBy", getWindowsDriverUpdateAlertSummaryReportPostRequestBody.groupBy);
    writer.writeStringValue("name", getWindowsDriverUpdateAlertSummaryReportPostRequestBody.name);
    writer.writeCollectionOfPrimitiveValues<string>("orderBy", getWindowsDriverUpdateAlertSummaryReportPostRequestBody.orderBy);
    writer.writeStringValue("search", getWindowsDriverUpdateAlertSummaryReportPostRequestBody.search);
    writer.writeCollectionOfPrimitiveValues<string>("select", getWindowsDriverUpdateAlertSummaryReportPostRequestBody.select);
    writer.writeStringValue("sessionId", getWindowsDriverUpdateAlertSummaryReportPostRequestBody.sessionId);
    writer.writeNumberValue("skip", getWindowsDriverUpdateAlertSummaryReportPostRequestBody.skip);
    writer.writeNumberValue("top", getWindowsDriverUpdateAlertSummaryReportPostRequestBody.top);
    writer.writeAdditionalData(getWindowsDriverUpdateAlertSummaryReportPostRequestBody.additionalData);
}
/**
 * Uri template for the request builder.
 */
export const GetWindowsDriverUpdateAlertSummaryReportRequestBuilderUriTemplate = "{+baseurl}/deviceManagement/reports/getWindowsDriverUpdateAlertSummaryReport";
/**
 * Metadata for all the requests in the request builder.
 */
export const GetWindowsDriverUpdateAlertSummaryReportRequestBuilderRequestsMetadata: RequestsMetadata = {
    post: {
        uriTemplate: GetWindowsDriverUpdateAlertSummaryReportRequestBuilderUriTemplate,
        responseBodyContentType: "application/octet-stream, application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendPrimitive",
        responseBodyFactory:  "ArrayBuffer",
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeGetWindowsDriverUpdateAlertSummaryReportPostRequestBody,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */

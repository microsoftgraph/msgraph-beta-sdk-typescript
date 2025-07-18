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
 * @returns {GetWindowsQualityUpdateAlertsPerPolicyPerDeviceReportPostRequestBody}
 */
// @ts-ignore
export function createGetWindowsQualityUpdateAlertsPerPolicyPerDeviceReportPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoGetWindowsQualityUpdateAlertsPerPolicyPerDeviceReportPostRequestBody;
}
/**
 * The deserialization information for the current model
 * @param GetWindowsQualityUpdateAlertsPerPolicyPerDeviceReportPostRequestBody The instance to deserialize into.
 * @returns {Record<string, (node: ParseNode) => void>}
 */
// @ts-ignore
export function deserializeIntoGetWindowsQualityUpdateAlertsPerPolicyPerDeviceReportPostRequestBody(getWindowsQualityUpdateAlertsPerPolicyPerDeviceReportPostRequestBody: Partial<GetWindowsQualityUpdateAlertsPerPolicyPerDeviceReportPostRequestBody> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "backingStoreEnabled": n => { getWindowsQualityUpdateAlertsPerPolicyPerDeviceReportPostRequestBody.backingStoreEnabled = true; },
        "filter": n => { getWindowsQualityUpdateAlertsPerPolicyPerDeviceReportPostRequestBody.filter = n.getStringValue(); },
        "groupBy": n => { getWindowsQualityUpdateAlertsPerPolicyPerDeviceReportPostRequestBody.groupBy = n.getCollectionOfPrimitiveValues<string>(); },
        "name": n => { getWindowsQualityUpdateAlertsPerPolicyPerDeviceReportPostRequestBody.name = n.getStringValue(); },
        "orderBy": n => { getWindowsQualityUpdateAlertsPerPolicyPerDeviceReportPostRequestBody.orderBy = n.getCollectionOfPrimitiveValues<string>(); },
        "search": n => { getWindowsQualityUpdateAlertsPerPolicyPerDeviceReportPostRequestBody.search = n.getStringValue(); },
        "select": n => { getWindowsQualityUpdateAlertsPerPolicyPerDeviceReportPostRequestBody.select = n.getCollectionOfPrimitiveValues<string>(); },
        "sessionId": n => { getWindowsQualityUpdateAlertsPerPolicyPerDeviceReportPostRequestBody.sessionId = n.getStringValue(); },
        "skip": n => { getWindowsQualityUpdateAlertsPerPolicyPerDeviceReportPostRequestBody.skip = n.getNumberValue(); },
        "top": n => { getWindowsQualityUpdateAlertsPerPolicyPerDeviceReportPostRequestBody.top = n.getNumberValue(); },
    }
}
export interface GetWindowsQualityUpdateAlertsPerPolicyPerDeviceReportPostRequestBody extends AdditionalDataHolder, BackedModel, Parsable {
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
 * Provides operations to call the getWindowsQualityUpdateAlertsPerPolicyPerDeviceReport method.
 */
export interface GetWindowsQualityUpdateAlertsPerPolicyPerDeviceReportRequestBuilder extends BaseRequestBuilder<GetWindowsQualityUpdateAlertsPerPolicyPerDeviceReportRequestBuilder> {
    /**
     * Invoke action getWindowsQualityUpdateAlertsPerPolicyPerDeviceReport
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<ArrayBuffer>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     post(body: GetWindowsQualityUpdateAlertsPerPolicyPerDeviceReportPostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<ArrayBuffer | undefined>;
    /**
     * Invoke action getWindowsQualityUpdateAlertsPerPolicyPerDeviceReport
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPostRequestInformation(body: GetWindowsQualityUpdateAlertsPerPolicyPerDeviceReportPostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Serializes information the current object
 * @param GetWindowsQualityUpdateAlertsPerPolicyPerDeviceReportPostRequestBody The instance to serialize from.
 * @param isSerializingDerivedType A boolean indicating whether the serialization is for a derived type.
 * @param writer Serialization writer to use to serialize this model
 */
// @ts-ignore
export function serializeGetWindowsQualityUpdateAlertsPerPolicyPerDeviceReportPostRequestBody(writer: SerializationWriter, getWindowsQualityUpdateAlertsPerPolicyPerDeviceReportPostRequestBody: Partial<GetWindowsQualityUpdateAlertsPerPolicyPerDeviceReportPostRequestBody> | undefined | null = {}, isSerializingDerivedType: boolean = false) : void {
    if (!getWindowsQualityUpdateAlertsPerPolicyPerDeviceReportPostRequestBody || isSerializingDerivedType) { return; }
    writer.writeStringValue("filter", getWindowsQualityUpdateAlertsPerPolicyPerDeviceReportPostRequestBody.filter);
    writer.writeCollectionOfPrimitiveValues<string>("groupBy", getWindowsQualityUpdateAlertsPerPolicyPerDeviceReportPostRequestBody.groupBy);
    writer.writeStringValue("name", getWindowsQualityUpdateAlertsPerPolicyPerDeviceReportPostRequestBody.name);
    writer.writeCollectionOfPrimitiveValues<string>("orderBy", getWindowsQualityUpdateAlertsPerPolicyPerDeviceReportPostRequestBody.orderBy);
    writer.writeStringValue("search", getWindowsQualityUpdateAlertsPerPolicyPerDeviceReportPostRequestBody.search);
    writer.writeCollectionOfPrimitiveValues<string>("select", getWindowsQualityUpdateAlertsPerPolicyPerDeviceReportPostRequestBody.select);
    writer.writeStringValue("sessionId", getWindowsQualityUpdateAlertsPerPolicyPerDeviceReportPostRequestBody.sessionId);
    writer.writeNumberValue("skip", getWindowsQualityUpdateAlertsPerPolicyPerDeviceReportPostRequestBody.skip);
    writer.writeNumberValue("top", getWindowsQualityUpdateAlertsPerPolicyPerDeviceReportPostRequestBody.top);
    writer.writeAdditionalData(getWindowsQualityUpdateAlertsPerPolicyPerDeviceReportPostRequestBody.additionalData);
}
/**
 * Uri template for the request builder.
 */
export const GetWindowsQualityUpdateAlertsPerPolicyPerDeviceReportRequestBuilderUriTemplate = "{+baseurl}/deviceManagement/reports/getWindowsQualityUpdateAlertsPerPolicyPerDeviceReport";
/**
 * Metadata for all the requests in the request builder.
 */
export const GetWindowsQualityUpdateAlertsPerPolicyPerDeviceReportRequestBuilderRequestsMetadata: RequestsMetadata = {
    post: {
        uriTemplate: GetWindowsQualityUpdateAlertsPerPolicyPerDeviceReportRequestBuilderUriTemplate,
        responseBodyContentType: "application/octet-stream, application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendPrimitive",
        responseBodyFactory:  "ArrayBuffer",
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeGetWindowsQualityUpdateAlertsPerPolicyPerDeviceReportPostRequestBody,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */

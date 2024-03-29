/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/';
import { type AdditionalDataHolder, type BackedModel, type BackingStore, type BaseRequestBuilder, type Parsable, type ParsableFactory, type ParseNode, type RequestConfiguration, type RequestInformation, type RequestsMetadata, type SerializationWriter } from '@microsoft/kiota-abstractions';

/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns {GetDeviceStatusByCompliacePolicyReportPostRequestBody}
 */
export function createGetDeviceStatusByCompliacePolicyReportPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoGetDeviceStatusByCompliacePolicyReportPostRequestBody;
}
/**
 * The deserialization information for the current model
 * @returns {Record<string, (node: ParseNode) => void>}
 */
export function deserializeIntoGetDeviceStatusByCompliacePolicyReportPostRequestBody(getDeviceStatusByCompliacePolicyReportPostRequestBody: Partial<GetDeviceStatusByCompliacePolicyReportPostRequestBody> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "backingStoreEnabled": n => { getDeviceStatusByCompliacePolicyReportPostRequestBody.backingStoreEnabled = true; },
        "filter": n => { getDeviceStatusByCompliacePolicyReportPostRequestBody.filter = n.getStringValue(); },
        "groupBy": n => { getDeviceStatusByCompliacePolicyReportPostRequestBody.groupBy = n.getCollectionOfPrimitiveValues<string>(); },
        "orderBy": n => { getDeviceStatusByCompliacePolicyReportPostRequestBody.orderBy = n.getCollectionOfPrimitiveValues<string>(); },
        "search": n => { getDeviceStatusByCompliacePolicyReportPostRequestBody.search = n.getStringValue(); },
        "select": n => { getDeviceStatusByCompliacePolicyReportPostRequestBody.select = n.getCollectionOfPrimitiveValues<string>(); },
        "sessionId": n => { getDeviceStatusByCompliacePolicyReportPostRequestBody.sessionId = n.getStringValue(); },
        "skip": n => { getDeviceStatusByCompliacePolicyReportPostRequestBody.skip = n.getNumberValue(); },
        "top": n => { getDeviceStatusByCompliacePolicyReportPostRequestBody.top = n.getNumberValue(); },
    }
}
export interface GetDeviceStatusByCompliacePolicyReportPostRequestBody extends AdditionalDataHolder, BackedModel, Parsable {
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
 * Provides operations to call the getDeviceStatusByCompliacePolicyReport method.
 */
export interface GetDeviceStatusByCompliacePolicyReportRequestBuilder extends BaseRequestBuilder<GetDeviceStatusByCompliacePolicyReportRequestBuilder> {
    /**
     * Invoke action getDeviceStatusByCompliacePolicyReport
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<ArrayBuffer>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     post(body: GetDeviceStatusByCompliacePolicyReportPostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<ArrayBuffer | undefined>;
    /**
     * Invoke action getDeviceStatusByCompliacePolicyReport
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPostRequestInformation(body: GetDeviceStatusByCompliacePolicyReportPostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Serializes information the current object
 * @param writer Serialization writer to use to serialize this model
 */
export function serializeGetDeviceStatusByCompliacePolicyReportPostRequestBody(writer: SerializationWriter, getDeviceStatusByCompliacePolicyReportPostRequestBody: Partial<GetDeviceStatusByCompliacePolicyReportPostRequestBody> | undefined = {}) : void {
    writer.writeStringValue("filter", getDeviceStatusByCompliacePolicyReportPostRequestBody.filter);
    writer.writeCollectionOfPrimitiveValues<string>("groupBy", getDeviceStatusByCompliacePolicyReportPostRequestBody.groupBy);
    writer.writeCollectionOfPrimitiveValues<string>("orderBy", getDeviceStatusByCompliacePolicyReportPostRequestBody.orderBy);
    writer.writeStringValue("search", getDeviceStatusByCompliacePolicyReportPostRequestBody.search);
    writer.writeCollectionOfPrimitiveValues<string>("select", getDeviceStatusByCompliacePolicyReportPostRequestBody.select);
    writer.writeStringValue("sessionId", getDeviceStatusByCompliacePolicyReportPostRequestBody.sessionId);
    writer.writeNumberValue("skip", getDeviceStatusByCompliacePolicyReportPostRequestBody.skip);
    writer.writeNumberValue("top", getDeviceStatusByCompliacePolicyReportPostRequestBody.top);
    writer.writeAdditionalData(getDeviceStatusByCompliacePolicyReportPostRequestBody.additionalData);
}
/**
 * Uri template for the request builder.
 */
export const GetDeviceStatusByCompliacePolicyReportRequestBuilderUriTemplate = "{+baseurl}/deviceManagement/reports/getDeviceStatusByCompliacePolicyReport";
/**
 * Metadata for all the requests in the request builder.
 */
export const GetDeviceStatusByCompliacePolicyReportRequestBuilderRequestsMetadata: RequestsMetadata = {
    post: {
        uriTemplate: GetDeviceStatusByCompliacePolicyReportRequestBuilderUriTemplate,
        responseBodyContentType: "application/octet-stream, application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendPrimitive",
        responseBodyFactory:  "ArrayBuffer",
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeGetDeviceStatusByCompliacePolicyReportPostRequestBody,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */

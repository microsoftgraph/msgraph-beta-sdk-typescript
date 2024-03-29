/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/';
import { type AdditionalDataHolder, type BackedModel, type BackingStore, type BaseRequestBuilder, type Parsable, type ParsableFactory, type ParseNode, type RequestConfiguration, type RequestInformation, type RequestsMetadata, type SerializationWriter } from '@microsoft/kiota-abstractions';

/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns {GetUnhealthyFirewallReportPostRequestBody}
 */
export function createGetUnhealthyFirewallReportPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoGetUnhealthyFirewallReportPostRequestBody;
}
/**
 * The deserialization information for the current model
 * @returns {Record<string, (node: ParseNode) => void>}
 */
export function deserializeIntoGetUnhealthyFirewallReportPostRequestBody(getUnhealthyFirewallReportPostRequestBody: Partial<GetUnhealthyFirewallReportPostRequestBody> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "backingStoreEnabled": n => { getUnhealthyFirewallReportPostRequestBody.backingStoreEnabled = true; },
        "filter": n => { getUnhealthyFirewallReportPostRequestBody.filter = n.getStringValue(); },
        "groupBy": n => { getUnhealthyFirewallReportPostRequestBody.groupBy = n.getCollectionOfPrimitiveValues<string>(); },
        "name": n => { getUnhealthyFirewallReportPostRequestBody.name = n.getStringValue(); },
        "orderBy": n => { getUnhealthyFirewallReportPostRequestBody.orderBy = n.getCollectionOfPrimitiveValues<string>(); },
        "search": n => { getUnhealthyFirewallReportPostRequestBody.search = n.getStringValue(); },
        "select": n => { getUnhealthyFirewallReportPostRequestBody.select = n.getCollectionOfPrimitiveValues<string>(); },
        "sessionId": n => { getUnhealthyFirewallReportPostRequestBody.sessionId = n.getStringValue(); },
        "skip": n => { getUnhealthyFirewallReportPostRequestBody.skip = n.getNumberValue(); },
        "top": n => { getUnhealthyFirewallReportPostRequestBody.top = n.getNumberValue(); },
    }
}
export interface GetUnhealthyFirewallReportPostRequestBody extends AdditionalDataHolder, BackedModel, Parsable {
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
 * Provides operations to call the getUnhealthyFirewallReport method.
 */
export interface GetUnhealthyFirewallReportRequestBuilder extends BaseRequestBuilder<GetUnhealthyFirewallReportRequestBuilder> {
    /**
     * Invoke action getUnhealthyFirewallReport
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<ArrayBuffer>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     post(body: GetUnhealthyFirewallReportPostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<ArrayBuffer | undefined>;
    /**
     * Invoke action getUnhealthyFirewallReport
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPostRequestInformation(body: GetUnhealthyFirewallReportPostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Serializes information the current object
 * @param writer Serialization writer to use to serialize this model
 */
export function serializeGetUnhealthyFirewallReportPostRequestBody(writer: SerializationWriter, getUnhealthyFirewallReportPostRequestBody: Partial<GetUnhealthyFirewallReportPostRequestBody> | undefined = {}) : void {
    writer.writeStringValue("filter", getUnhealthyFirewallReportPostRequestBody.filter);
    writer.writeCollectionOfPrimitiveValues<string>("groupBy", getUnhealthyFirewallReportPostRequestBody.groupBy);
    writer.writeStringValue("name", getUnhealthyFirewallReportPostRequestBody.name);
    writer.writeCollectionOfPrimitiveValues<string>("orderBy", getUnhealthyFirewallReportPostRequestBody.orderBy);
    writer.writeStringValue("search", getUnhealthyFirewallReportPostRequestBody.search);
    writer.writeCollectionOfPrimitiveValues<string>("select", getUnhealthyFirewallReportPostRequestBody.select);
    writer.writeStringValue("sessionId", getUnhealthyFirewallReportPostRequestBody.sessionId);
    writer.writeNumberValue("skip", getUnhealthyFirewallReportPostRequestBody.skip);
    writer.writeNumberValue("top", getUnhealthyFirewallReportPostRequestBody.top);
    writer.writeAdditionalData(getUnhealthyFirewallReportPostRequestBody.additionalData);
}
/**
 * Uri template for the request builder.
 */
export const GetUnhealthyFirewallReportRequestBuilderUriTemplate = "{+baseurl}/deviceManagement/reports/getUnhealthyFirewallReport";
/**
 * Metadata for all the requests in the request builder.
 */
export const GetUnhealthyFirewallReportRequestBuilderRequestsMetadata: RequestsMetadata = {
    post: {
        uriTemplate: GetUnhealthyFirewallReportRequestBuilderUriTemplate,
        responseBodyContentType: "application/octet-stream, application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendPrimitive",
        responseBodyFactory:  "ArrayBuffer",
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeGetUnhealthyFirewallReportPostRequestBody,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */

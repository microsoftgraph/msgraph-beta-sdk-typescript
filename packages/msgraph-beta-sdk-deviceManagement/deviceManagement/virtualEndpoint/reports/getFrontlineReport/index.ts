/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
import { CloudPcReportName, CloudPcReportNameObject } from '@microsoft/msgraph-beta-sdk/models/';
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/';
import { type AdditionalDataHolder, type BackedModel, type BackingStore, type BaseRequestBuilder, type Parsable, type ParsableFactory, type ParseNode, type RequestConfiguration, type RequestInformation, type RequestsMetadata, type SerializationWriter } from '@microsoft/kiota-abstractions';

/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns a getFrontlineReportPostRequestBody
 */
export function createGetFrontlineReportPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoGetFrontlineReportPostRequestBody;
}
/**
 * The deserialization information for the current model
 * @returns a Record<string, (node: ParseNode) => void>
 */
export function deserializeIntoGetFrontlineReportPostRequestBody(getFrontlineReportPostRequestBody: Partial<GetFrontlineReportPostRequestBody> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "backingStoreEnabled": n => { getFrontlineReportPostRequestBody.backingStoreEnabled = true; },
        "filter": n => { getFrontlineReportPostRequestBody.filter = n.getStringValue(); },
        "groupBy": n => { getFrontlineReportPostRequestBody.groupBy = n.getCollectionOfPrimitiveValues<string>(); },
        "orderBy": n => { getFrontlineReportPostRequestBody.orderBy = n.getCollectionOfPrimitiveValues<string>(); },
        "reportName": n => { getFrontlineReportPostRequestBody.reportName = n.getEnumValue<CloudPcReportName>(CloudPcReportNameObject); },
        "search": n => { getFrontlineReportPostRequestBody.search = n.getStringValue(); },
        "select": n => { getFrontlineReportPostRequestBody.select = n.getCollectionOfPrimitiveValues<string>(); },
        "skip": n => { getFrontlineReportPostRequestBody.skip = n.getNumberValue(); },
        "top": n => { getFrontlineReportPostRequestBody.top = n.getNumberValue(); },
    }
}
export interface GetFrontlineReportPostRequestBody extends AdditionalDataHolder, BackedModel, Parsable {
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
     * The reportName property
     */
    reportName?: CloudPcReportName;
    /**
     * The search property
     */
    search?: string;
    /**
     * The select property
     */
    select?: string[];
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
 * Provides operations to call the getFrontlineReport method.
 */
export interface GetFrontlineReportRequestBuilder extends BaseRequestBuilder<GetFrontlineReportRequestBuilder> {
    /**
     * Get the Windows 365 Frontline reports, such as real-time or historical data reports.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of ArrayBuffer
     * @see {@link https://learn.microsoft.com/graph/api/cloudpcreports-getfrontlinereport?view=graph-rest-1.0|Find more info here}
     */
     post(body: GetFrontlineReportPostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<ArrayBuffer | undefined>;
    /**
     * Get the Windows 365 Frontline reports, such as real-time or historical data reports.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toPostRequestInformation(body: GetFrontlineReportPostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Serializes information the current object
 * @param writer Serialization writer to use to serialize this model
 */
export function serializeGetFrontlineReportPostRequestBody(writer: SerializationWriter, getFrontlineReportPostRequestBody: Partial<GetFrontlineReportPostRequestBody> | undefined = {}) : void {
    writer.writeStringValue("filter", getFrontlineReportPostRequestBody.filter);
    writer.writeCollectionOfPrimitiveValues<string>("groupBy", getFrontlineReportPostRequestBody.groupBy);
    writer.writeCollectionOfPrimitiveValues<string>("orderBy", getFrontlineReportPostRequestBody.orderBy);
    writer.writeEnumValue<CloudPcReportName>("reportName", getFrontlineReportPostRequestBody.reportName);
    writer.writeStringValue("search", getFrontlineReportPostRequestBody.search);
    writer.writeCollectionOfPrimitiveValues<string>("select", getFrontlineReportPostRequestBody.select);
    writer.writeNumberValue("skip", getFrontlineReportPostRequestBody.skip);
    writer.writeNumberValue("top", getFrontlineReportPostRequestBody.top);
    writer.writeAdditionalData(getFrontlineReportPostRequestBody.additionalData);
}
/**
 * Metadata for all the requests in the request builder.
 */
export const GetFrontlineReportRequestBuilderRequestsMetadata: RequestsMetadata = {
    post: {
        responseBodyContentType: "application/octet-stream, application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendPrimitiveAsync",
        responseBodyFactory:  "ArrayBuffer",
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeGetFrontlineReportPostRequestBody,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/**
 * Uri template for the request builder.
 */
export const GetFrontlineReportRequestBuilderUriTemplate = "{+baseurl}/deviceManagement/virtualEndpoint/reports/getFrontlineReport";
/* tslint:enable */
/* eslint-enable */
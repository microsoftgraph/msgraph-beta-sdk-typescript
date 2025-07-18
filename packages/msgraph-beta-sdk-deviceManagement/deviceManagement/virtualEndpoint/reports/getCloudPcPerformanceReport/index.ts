/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { CloudPCPerformanceReportName, CloudPCPerformanceReportNameObject } from '@microsoft/msgraph-beta-sdk/models/index.js';
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/index.js';
// @ts-ignore
import { type AdditionalDataHolder, type BackedModel, type BackingStore, type BaseRequestBuilder, type Parsable, type ParsableFactory, type ParseNode, type RequestConfiguration, type RequestInformation, type RequestsMetadata, type SerializationWriter } from '@microsoft/kiota-abstractions';

/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns {GetCloudPcPerformanceReportPostRequestBody}
 */
// @ts-ignore
export function createGetCloudPcPerformanceReportPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoGetCloudPcPerformanceReportPostRequestBody;
}
/**
 * The deserialization information for the current model
 * @param GetCloudPcPerformanceReportPostRequestBody The instance to deserialize into.
 * @returns {Record<string, (node: ParseNode) => void>}
 */
// @ts-ignore
export function deserializeIntoGetCloudPcPerformanceReportPostRequestBody(getCloudPcPerformanceReportPostRequestBody: Partial<GetCloudPcPerformanceReportPostRequestBody> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "backingStoreEnabled": n => { getCloudPcPerformanceReportPostRequestBody.backingStoreEnabled = true; },
        "filter": n => { getCloudPcPerformanceReportPostRequestBody.filter = n.getStringValue(); },
        "groupBy": n => { getCloudPcPerformanceReportPostRequestBody.groupBy = n.getCollectionOfPrimitiveValues<string>(); },
        "orderBy": n => { getCloudPcPerformanceReportPostRequestBody.orderBy = n.getCollectionOfPrimitiveValues<string>(); },
        "reportName": n => { getCloudPcPerformanceReportPostRequestBody.reportName = n.getEnumValue<CloudPCPerformanceReportName>(CloudPCPerformanceReportNameObject); },
        "search": n => { getCloudPcPerformanceReportPostRequestBody.search = n.getStringValue(); },
        "select": n => { getCloudPcPerformanceReportPostRequestBody.select = n.getCollectionOfPrimitiveValues<string>(); },
        "skip": n => { getCloudPcPerformanceReportPostRequestBody.skip = n.getNumberValue(); },
        "top": n => { getCloudPcPerformanceReportPostRequestBody.top = n.getNumberValue(); },
    }
}
export interface GetCloudPcPerformanceReportPostRequestBody extends AdditionalDataHolder, BackedModel, Parsable {
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
     * The orderBy property
     */
    orderBy?: string[] | null;
    /**
     * The reportName property
     */
    reportName?: CloudPCPerformanceReportName | null;
    /**
     * The search property
     */
    search?: string | null;
    /**
     * The select property
     */
    select?: string[] | null;
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
 * Provides operations to call the getCloudPcPerformanceReport method.
 */
export interface GetCloudPcPerformanceReportRequestBuilder extends BaseRequestBuilder<GetCloudPcPerformanceReportRequestBuilder> {
    /**
     * Get a report related to the performance of Cloud PCs.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<ArrayBuffer>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     * @deprecated Starting from December 31, 2024, this API (&apos;getCloudPcPerformanceReport&apos;) will be deprecated and no longer supported. Please use the retrieveCloudPcTenantMetricsReport API. as of 2024-09/getCloudPcPerformanceReport on 2024-09-10 and will be removed 2024-12-31
     * @see {@link https://learn.microsoft.com/graph/api/cloudpcreports-getcloudpcperformancereport?view=graph-rest-beta|Find more info here}
     */
     post(body: GetCloudPcPerformanceReportPostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<ArrayBuffer | undefined>;
    /**
     * Get a report related to the performance of Cloud PCs.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     * @deprecated Starting from December 31, 2024, this API (&apos;getCloudPcPerformanceReport&apos;) will be deprecated and no longer supported. Please use the retrieveCloudPcTenantMetricsReport API. as of 2024-09/getCloudPcPerformanceReport on 2024-09-10 and will be removed 2024-12-31
     */
     toPostRequestInformation(body: GetCloudPcPerformanceReportPostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Serializes information the current object
 * @param GetCloudPcPerformanceReportPostRequestBody The instance to serialize from.
 * @param isSerializingDerivedType A boolean indicating whether the serialization is for a derived type.
 * @param writer Serialization writer to use to serialize this model
 */
// @ts-ignore
export function serializeGetCloudPcPerformanceReportPostRequestBody(writer: SerializationWriter, getCloudPcPerformanceReportPostRequestBody: Partial<GetCloudPcPerformanceReportPostRequestBody> | undefined | null = {}, isSerializingDerivedType: boolean = false) : void {
    if (!getCloudPcPerformanceReportPostRequestBody || isSerializingDerivedType) { return; }
    writer.writeStringValue("filter", getCloudPcPerformanceReportPostRequestBody.filter);
    writer.writeCollectionOfPrimitiveValues<string>("groupBy", getCloudPcPerformanceReportPostRequestBody.groupBy);
    writer.writeCollectionOfPrimitiveValues<string>("orderBy", getCloudPcPerformanceReportPostRequestBody.orderBy);
    writer.writeEnumValue<CloudPCPerformanceReportName>("reportName", getCloudPcPerformanceReportPostRequestBody.reportName);
    writer.writeStringValue("search", getCloudPcPerformanceReportPostRequestBody.search);
    writer.writeCollectionOfPrimitiveValues<string>("select", getCloudPcPerformanceReportPostRequestBody.select);
    writer.writeNumberValue("skip", getCloudPcPerformanceReportPostRequestBody.skip);
    writer.writeNumberValue("top", getCloudPcPerformanceReportPostRequestBody.top);
    writer.writeAdditionalData(getCloudPcPerformanceReportPostRequestBody.additionalData);
}
/**
 * Uri template for the request builder.
 */
export const GetCloudPcPerformanceReportRequestBuilderUriTemplate = "{+baseurl}/deviceManagement/virtualEndpoint/reports/getCloudPcPerformanceReport";
/**
 * Metadata for all the requests in the request builder.
 */
export const GetCloudPcPerformanceReportRequestBuilderRequestsMetadata: RequestsMetadata = {
    post: {
        uriTemplate: GetCloudPcPerformanceReportRequestBuilderUriTemplate,
        responseBodyContentType: "application/octet-stream, application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendPrimitive",
        responseBodyFactory:  "ArrayBuffer",
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeGetCloudPcPerformanceReportPostRequestBody,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */
